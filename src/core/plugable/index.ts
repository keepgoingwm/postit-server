import HandlerStore, {
  Handler, HandlerRawOptions, HandlerOptions
} from './handlerStore'
import { promisify } from '../util'

export interface PluginConfig {
  type: string
  handlers: HandlerRawOptions
}
export type HandlerOptionsCallback = (type: string, handlers: HandlerOptions) => void

export default class Plugable {
  // hooks: { [name: string]: any }
  private readonly handlerStore: HandlerStore

  constructor(plugins: PluginConfig[] = []) {
    this.handlerStore = new HandlerStore()
    this.registerPlugins(plugins)
  }

  protected runPlugin(type: string, name: string, ...args): any {
    const handler: Handler = this.handlerStore.getHandler(type, name)

    if (handler) {
      // TODO 处理异步
      return promisify(handler, ...args)
    } else {
      return Promise.resolve(null)
    }
  }

  protected async serialRun(type, names: string[], ...args): Promise<any> {
    let res = null
    for (const name of names) {
      res = await this.runPlugin(type, name, res, ...args)
    }
    return res
  }

  protected eachPluginRun(callback: HandlerOptionsCallback): void {
    const allHandlerOptions = this.handlerStore.getAllHandlerOptions()

    Object.entries(allHandlerOptions).forEach(([type, handlers]) => {
      callback(type, handlers)
    })
  }

  registerPlugins(config: PluginConfig[]): void {
    config.forEach(plugin => {
      this.handlerStore.registerHandler(plugin.type, plugin.handlers)
    })
  }
}
