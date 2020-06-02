import nodeConfig from 'config'

const postitConfig = nodeConfig.get('postit')

import loggerDefaultConfig from './logger.default'
import coreDefaultConfig from './core.default'

const conf = postitConfig.util.extendDeep({
  logger: loggerDefaultConfig,
  core: coreDefaultConfig
}, postitConfig)

export const mergeConfig = postitConfig.util.extendDeep

export default conf
