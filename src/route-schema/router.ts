import Router, { KoaRestRouter } from 'koa-rest-router'
import schema from './schema'
import conf from '../config'

import docController from '../controller/doc'

const router: KoaRestRouter = Router({ prefix: conf.apiPrefix || '<%= apiPrefix %>' || '' }).loadMethods()

router.resource(docController.name, docController.controller)

schema(router)

export default router
