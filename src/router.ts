import Router from 'koa-rest-router'

import docController from './controller/doc'

let router = Router({ prefix: '<%= apiPrefix %>' || '' }).loadMethods()

router.resource(docController.name, docController.controller)
// docController(router)

export default router