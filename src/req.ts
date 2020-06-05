import path from 'path'
import compose from 'koa-compose'
import koaBody, { } from 'koa-body'
import { Context, Next } from 'koa'

let reqHandler = async (ctx: Context, next: Next) => {
  if (ctx.method === 'post' && !ctx.is('json')) {
    return ctx.throw(400, 'only json supported')
  }
  if (!ctx.accepts('json')) {
    return ctx.throw(406, 'only json supported')
  }

  return await next()
}

export default function genReqMiddleware(options) {
  return compose([reqHandler, koaBody({
    multipart: true,
    // encoding: 'gzip',
    formidable: {
      uploadDir: path.join(__dirname, options.uploadDir || 'public/upload'),
      keepExtensions: true,
      maxFieldsSize: 2 * 1024 * 1024,
      onFileBegin: (name, file) => {
        // console.log(`name: ${name}`);
        // console.log(file);
      },
    },
    onError: (err: Error, ctx: Context) => {
      this.logger.warn(err);
      ctx.throw('body parse error', 422);
    }
  })])
}