import HandlerStore, {
  Handler, HandlerRawOptions, HandlerOptions
} from './handlerStore'

export interface PluginConfig {
  type: string,
  handlers: HandlerRawOptions
}
export interface HandlerOptionsCallback {
  (type: string, handlers: HandlerOptions): void
}

export default class Plugable {
  // hooks: { [name: string]: any }
  handlerStore: HandlerStore

  constructor(plugins: PluginConfig[] = []) {
    this.handlerStore = new HandlerStore()
    this.registerPlugins(plugins)
  }

  runPlugin(type: string, name: string, ...args) {
    let handler: Handler = this.handlerStore.getHandler(type, name)

    if (handler) {
      // TODO 处理异步
      return handler(...args)
    }
  }

  eachPluginRun(callback: HandlerOptionsCallback) {
    let allHandlerOptions = this.handlerStore.getAllHandlerOptions()

    Object.entries(allHandlerOptions).forEach(([type, handlers]) => {
      callback(type, handlers)
    });
  }

  registerPlugins(config: PluginConfig[]) {
    config.forEach(plugin => {
      this.handlerStore.registerHandler(plugin.type, plugin.handlers)
    });
  }
}