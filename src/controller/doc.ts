import { Context, Next } from 'koa'

export default {
  name: 'docs',
  controller: {
    index(ctx: Context, next: Next) {
      ctx.body = 'doc'
    },
    create: async (ctx: Context, next: Next) => {
      ctx.body = 'doc'
    },
  }
}