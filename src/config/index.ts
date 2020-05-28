import rc from 'rc'

import loggerDefaultConfig from '../config/logger.default.config'

const conf = rc('postit', {
  logger: loggerDefaultConfig
})

export default conf
