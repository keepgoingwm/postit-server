import { Lifecycles } from './lifecycle'

export default class Postit {
  start(): void {
    Lifecycles.forEach(e => {
      console.log(e)
    })
  }
}
