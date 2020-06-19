import Plugable, { PluginConfig } from '../plugable'

export type Lifecycles = 'init' | 'auth'
export const Lifecycles: string[] = [
  'init',
  'auth',
  'prepare'
  // auth
  // prepare
  // beforeConvert
  // converting
  // converted
  // beforePost
  // post
  // posted
  // beforeUpdate
  // update
  // updated
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

  convert(type: string, ...args: string[]): any {
    return this.serialRun(type, ['beforeConvert', 'convert', 'converted'], ...args)
  }

  post(type: string, ...args: string[]): any {
    return this.serialRun(type, ['beforePost', 'post', 'posted'], ...args)
  }

  update(type: string, ...args: string[]): any {
    return this.serialRun(type, ['beforeUpdate', 'update', 'updated'], ...args)
  }
}
