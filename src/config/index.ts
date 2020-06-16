import nodeConfig from 'config'

import loggerDefaultConfig from './logger.default'
import coreDefaultConfig from './core.default'

const postitConfig = nodeConfig.get('postit')
const mergeConfig = postitConfig.util.extendDeep

const conf = mergeConfig({
  logger: loggerDefaultConfig,
  core: coreDefaultConfig
}, postitConfig)

export {
  mergeConfig
}
export default conf
