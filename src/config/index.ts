import nodeConfig from 'config'

import loggerDefaultConfig from './logger.default'
import coreDefaultConfig from './core.default'

const postitConfig = nodeConfig.get('postit')

const conf = postitConfig.util.extendDeep({
  logger: loggerDefaultConfig,
  core: coreDefaultConfig
}, postitConfig)

export const mergeConfig = postitConfig.util.extendDeep

export default conf
