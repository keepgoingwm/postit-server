import RouteSchema from 'koa-route-schema'
import yapiParseOptions from 'koa-route-schema-yapi'
import yapiSchemaOptions from './schemaOptions'

export default function attachSchema(router) {
  let routeschema = new RouteSchema({
    ...yapiParseOptions,
    prefix: 'v1',
    schemaOptions: yapiSchemaOptions
  })
  routeschema.attachToRouter(router)
}