
export interface Handler {
  (content?: string): string
}
export type HandlerRawOptions = { [name: string]: unknown }
export type HandlerOptions = { [name: string]: Handler }

export default class HandlerStore {
  store: { [type: string]: HandlerOptions } = {}

  getHandler(type: string, name: string): Handler {
    const handlerOptions: HandlerOptions = this.getHandlerOptions(type)

    if (!handlerOptions) {
      throw new Error(`no handler '${name}' for type:${type}`)
    }

    return handlerOptions[name]
  }

  getHandlerOptions(type: string): HandlerOptions {
    return this.store[type]
  }

  hasHandlerOptions(type: string): boolean {
    return Boolean(this.store[type])
  }

  registerHandler(type: string, options: HandlerRawOptions): void {
    // if (this.hasHandlerOptions(type)) {

    // }

    this.store[type] = parseHandler(options)
  }

  unregisterHandler(type: string): void {
    if (this.hasHandlerOptions(type)) {
      delete this.store[type]
    }
  }

  getAllHandlerOptions(): { [type: string]: HandlerOptions } {
    return this.store
  }
}

function parseHandler(options: HandlerRawOptions): HandlerOptions {
  return options
}
