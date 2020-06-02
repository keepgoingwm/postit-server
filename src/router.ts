import Router from 'koa-rest-router'
import conf from './config'

import docController from './controller/doc'

let router = Router({ prefix: conf.apiPrefix || '<%= apiPrefix %>' || '' }).loadMethods()

router.resource(docController.name, docController.controller)
// docController(router)

export default router