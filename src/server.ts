import Koa, { Context } from 'koa'
import Postit from './core/index'

interface ServerOptions {
  port?: number
}

export default function createServer(options: ServerOptions = {}) {
  const app: Koa = new Koa()

  app.use((ctx: Context) => {
    ctx.body = 'hello'
    let postit: Postit = new Postit()
    console.log(postit)
  })

  app.listen(options.port || 3000)
}
