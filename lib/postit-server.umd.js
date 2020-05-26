(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('koa')) :
  typeof define === 'function' && define.amd ? define(['exports', 'koa'], factory) :
  (global = global || self, factory(global.PostitServer = {}, global.Koa));
}(this, (function (exports, Koa) { 'use strict';

  Koa = Koa && Object.prototype.hasOwnProperty.call(Koa, 'default') ? Koa['default'] : Koa;

  var Lifecycles = [
      'auth',
      'prepare'
  ];

  var Postit = /** @class */ (function () {
      function Postit() {
      }
      Postit.prototype.start = function () {
          Lifecycles.forEach(function (e) {
              console.log(e);
          });
      };
      return Postit;
  }());

  function createServer(options) {
      if (options === void 0) { options = {}; }
      var app = new Koa();
      app.use(function (ctx) {
          ctx.body = 'hello';
          var postit = new Postit();
          console.log(postit);
      });
      app.listen(options.port || 3000);
  }

  // exports
  // --------------------------------------------------------------------------------------------------
  var version = '0.0.1';

  exports.createServer = createServer;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=postit-server.umd.js.map
