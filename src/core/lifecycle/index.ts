import Plugable, { PluginConfig } from '../plugable'

export const Lifecycles: string[] = [
  'init',
  'auth',
  'prepare'
  //   auth
  // prepare
  // beforeConvert
  // converting
  // converted
  // beforePost
  // posting
  // posted
  // update
  // delete
  // archive
]

export default class Lifecycle extends Plugable {
  constructor(plugins: PluginConfig[]) {
    super(plugins)
    this.initAll()
  }

  initAll(): void {
    this.eachPluginRun((type, handlers) => {
      handlers.init && handlers.init()
    })
  }

  post(type: string, ...args: string[]): any {
    return this.runPlugin(type, 'post', ...args)
  }
}
