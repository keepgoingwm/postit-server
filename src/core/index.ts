import { PluginConfig } from './plugable'
import Lifecycle from './lifecycle'

export interface PostitOptions {
  plugins?: PluginConfig[]
}

let uid = 1

export default class Postit extends Lifecycle {
  uid: number
  options: PostitOptions

  constructor(options: PostitOptions) {
    super(options.plugins)
    // TODO 合并配置
    this.options = options

    this.uid = uid++

    this.initAll()
  }
}

export { PluginConfig } from './plugable'
export { HandlerRawOptions } from './plugable/handlerStore'
