import { Middleware } from 'koa'
import log4js, { Logger } from 'koa-log4'
import conf from '../config'

log4js.configure(conf.logger)

export { Logger } from 'koa-log4'
export let logger: Logger = log4js.getLogger('application')
logger.warn('logger ready')

export function accessLogger(): Middleware {
  return log4js.koaLogger(log4js.getLogger('access'))
}
