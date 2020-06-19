/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Context } from 'koa'

export default {
  name: 'docs',
  controller: {
    index(ctx: Context): void {
      ctx.body = 'doc'
    },
    create: async (ctx: Context): Promise<void> => {
      const { type, content } = ctx.request.body
      const res = await ctx.postit.post(type, content, ctx.request.body)
      console.log('object', res)
      // await next()
      if (!res) {
        ctx.throw('wrong')
      } else {
        ctx.body = res
      }
    },
    show: async (ctx: Context): Promise<void> => {
      ctx.throw(401, 'access_denied', { user: 'user' })
    }
  }
}
