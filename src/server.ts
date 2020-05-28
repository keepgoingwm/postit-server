import Koa from 'koa'
import { accessLogger, logger, Logger } from './logger'
import router from './router'

import { randomString } from './util'

export interface ServerOptions {
  port?: number
}

export default class Server {
  app: Koa
  logger: Logger = logger
  options: ServerOptions = {}

  constructor({
    port = 3000
  }: ServerOptions = {}) {
    this.options.port = port
  }

  start() {
    this.app = new Koa()
    this.app.keys = Array.apply(null, { length: 5 }).map(randomString)

    this.app.use(accessLogger())
    this.app.on('error', err => {
      this.logger.error(err)
    })

    this.app.use(router.middleware())

    this.app.listen(this.options.port)
  }
}
