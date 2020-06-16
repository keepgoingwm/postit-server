import HandlerStore, {
  Handler, HandlerRawOptions, HandlerOptions
} from './handlerStore'

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

  runPlugin(type: string, name: string, ...args): any {
    const handler: Handler = this.handlerStore.getHandler(type, name)

    if (handler) {
      // TODO 处理异步
      return handler(...args)
    }
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
