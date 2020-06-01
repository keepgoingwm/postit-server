import rc from 'rc'

import loggerDefaultConfig from './logger.default.config'
import coreDefaultConfig from './core.default.config'

const conf = rc('postit', {
  logger: loggerDefaultConfig,
  core: coreDefaultConfig
})

export default conf
