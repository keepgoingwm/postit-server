import { Lifecycles } from './lifecycle'

export default class Postit {
  run(): void {
    Lifecycles.forEach(e => {
      console.log(e)
    })
  }
}
