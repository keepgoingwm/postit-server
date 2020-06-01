import HandlerStore, {
  HandlerOptions, Handler
} from './handlerStore'

export interface pluginsConfig {
  type: string,
  handlers: HandlerOptions
}

export default class Plugable {
  // hooks: { [name: string]: any }
  handlerStore: HandlerStore

  constructor(plugins: pluginsConfig[] = []) {
    this.handlerStore = new HandlerStore()
    this.registerAll(plugins)
  }

  getHandler(type: string, name: string): Handler {
    let handler: Handler = this.handlerStore.getHandler(type)

    if (!handler) {
      throw new Error('no handler')
    }

    return handler
  }

  registerHandler(type: string, handlers: HandlerOptions) {
    this.handlerStore.registerHandler(type, handlers)
  }

  unregisterHandler(type: string) {
    this.handlerStore.unregisterHandler(type)
  }

  registerAll(config: pluginsConfig[]) {
    config.forEach(plugin => {
      this.registerHandler(plugin.type, plugin.handlers)
    });
    // Object.keys(config).forEach(type => {
    //   this.registerHandler(type, config[type])
    // })
  }
}