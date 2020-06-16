import Koa from 'koa'

import conf, { mergeConfig } from './config/index'
import { accessLogger, logger, Logger } from './logger'
import genReqMiddleware from './req'
import router from './route-schema/router'
import Postit, { PostitOptions } from './core'

import { randomString } from './util'

export interface ServerOptions {
  port?: number
  core?: PostitOptions
  uploadDir?: PostitOptions
}

export default class Server {
  app: Koa
  logger: Logger = logger
  postit: Postit
  options: ServerOptions = {}

  constructor({
    port,
    core = {}
  }: ServerOptions = {}) {
    this.options.port = port || conf.port || 3000
    this.options.core = mergeConfig(conf.core, core)
  }

  start(): void {
    this.app = new Koa()
    this.app.keys = Array.apply(null, { length: 5 }).map(randomString) // eslint-disable-line prefer-spread

    this.app.context.postit = this.postit = new Postit(this.options.core)
    this.app.context.logger = this.logger
    this.app.context.options = this.options
    this.logger.info('init and mount Postit instance')

    this.app.on('error', (err: Error) => {
      console.log(err)
      this.logger.error(err)
    })
    this.app.use(accessLogger())

    this.app.use(genReqMiddleware(this.options))
    this.app.use(router.middleware())

    this.app.listen(this.options.port)
    this.logger.info(`app listen on ${this.options.port}`)
  }
}

declare module 'koa' {
  interface Context {
    options: ServerOptions
    postit: Postit
    logger: Logger
  }
}
