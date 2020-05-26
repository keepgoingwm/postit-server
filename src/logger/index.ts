import path from 'path'
import { Middleware } from 'koa'
import log4js, { Logger } from 'koa-log4'

export { Logger } from 'koa-log4'
export let logger: Logger

export function accessLogger(): Middleware {
  return log4js.koaLogger(log4js.getLogger('access'))
}

try {
  log4js.configure(path.join(__dirname, '../logger.configs.json'))
  logger = log4js.getLogger('application')
} catch (err) {
  log4js.configure(path.join(__dirname, '../logger.config.default.json'))
  logger = log4js.getLogger('server')
  logger.warn('no logger config file(logger.config.json), use logger.config.default.json as default')
}