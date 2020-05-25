import Koa, { Context } from 'koa'

interface ServerOptions {
  port?: number
}

export default function createServer(options: ServerOptions = {}) {
  const app: Koa = new Koa()

  app.use((ctx: Context) => {
    ctx.body = 'hello'
  })

  app.listen(options.port || 3000)
}
