import { Context, Next } from 'koa'

let reqHandler = async (ctx: Context, next: Next) => {
  if (!ctx.is('json')) {
    return ctx.throw(400, 'only json supported')
  }
  if (!ctx.accepts('json')) {
    return ctx.throw(406, 'only json supported')
  }

  await next()
}

export default reqHandler