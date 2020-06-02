import { Context, Next } from 'koa'

export default {
  name: 'docs',
  controller: {
    index(ctx: Context, next: Next) {
      ctx.body = 'doc'
    },
    create: async (ctx: Context, next: Next) => {
      let { type, content } = ctx.request.body
      let res = await ctx.postit.post(type, content)
      console.log('object', res);
      // await next()
      if (!res) {
        ctx.throw('wrong')
      } else {
        ctx.body = res
      }
    },
  }
}