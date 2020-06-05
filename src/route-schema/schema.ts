import RouteSchema from 'koa-route-schema'
import schemaOptions from './schemaOptions'

export default function attachSchema(router) {
  let routeschema = RouteSchema(schemaOptions)
  routeschema.attachToRouter(router)
}