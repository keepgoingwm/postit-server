import Plugable, { pluginsConfig } from './plugable'
// import { Lifecycles } from './lifecycle'
import conf from './config';

export interface PostitOptions {
  plugins?: pluginsConfig[]
}

let uid = 1

export default class Postit extends Plugable {
  uid: number
  options: PostitOptions

  constructor(options: PostitOptions = conf.core) {
    super(options.plugins)
    // TODO 合并配置
    this.options = options

    this.uid = uid++
  }

  // run(type: string): void {
  //   let handler: Handler = this.handlerStore.getHandler(type)
  //   if (!handler) {
  //     throw new Error('no handler')
  //   }

  //   Lifecycles.forEach(e => {
  //     console.log(handler[e])
  //   })
  // }
}

export { pluginsConfig } from './plugable'
export { HandlerOptions } from './handlerStore'