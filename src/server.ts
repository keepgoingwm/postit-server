import Koa from 'koa'
import { accessLogger, logger, Logger } from './logger'
// import Postit from './core'
import router from './router'

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

    this.app.use(accessLogger())
    this.app.on('error', err => {
      this.logger.error(err)
    })

    this.app.use(router.middleware())
    // this.app.use((ctx: Context, next: Next) => {
    //   ctx.body = 'hello'
    //   let postit: Postit = new Postit()
    //   this.logger.info(postit)
    // })

    this.app.listen(this.options.port)
  }
}
