export interface HandlerOptions {

}

export interface Handler {

}

export default class HandlerStore {
  store: { [type: string]: Handler } = {}

  getHandler(type: string): Handler {
    return this.store[type]
  }

  hasHandler(type: string): boolean {
    return Boolean(this.store[type])
  }

  registerHandler(type: string, options: HandlerOptions): void {
    if (this.hasHandler(type)) {

    }

    this.store[type] = parseHandler(options)
  }

  unregisterHandler(type: string): void {
    if (this.hasHandler(type)) {
      delete this.store[type]
    }
  }
}

function parseHandler(options: HandlerOptions): Handler {
  return {}
}
