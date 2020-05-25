(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('koa')) :
  typeof define === 'function' && define.amd ? define(['koa'], factory) :
  (global = global || self, global.PostitServer = factory(global.Koa));
}(this, (function (Koa) { 'use strict';

  Koa = Koa && Object.prototype.hasOwnProperty.call(Koa, 'default') ? Koa['default'] : Koa;

  function createServer(options) {
      if (options === void 0) { options = {}; }
      var app = new Koa();
      app.use(function (ctx) {
          ctx.body = 'hello';
      });
      app.listen(options.port || 3000);
  }

  return createServer;

})));
//# sourceMappingURL=server.umd.js.map
