import { Context, Next } from 'koa'
import compose from 'koa-compose'
import jsonschema from 'koa-jsonschema'

export default {
  name: 'docs',
  controller: {
    index(ctx: Context, next: Next) {
      ctx.body = 'doc'
    },
    create: compose([jsonschema({"type":"object","properties":{"content":{"type":"string","title":"内容","minLength":0,"maxLength":5000},"type":{"type":"string","title":"类型","mock":{"mock":"@string"},"minLength":1,"maxLength":20,"enum":["example","hexo","weibo"]}},"required":["content","type"]}), async (ctx: Context, next: Next) => {
      let { type, content } = ctx.request.body
      let res = await ctx.postit.post(type, content)
      console.log('object', res);
      // await next()
      if (!res) {
        ctx.throw('wrong')
      } else {
        ctx.body = res
      }
    }]),
    show: async (ctx: Context, next: Next) => {
      ctx.throw(401, 'access_denied', { user: 'user' });
    }
  }
}