'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));

function createServer(options) {
    if (options === void 0) { options = {}; }
    var app = new Koa();
    app.use(function (ctx) {
        ctx.body = 'hello';
    });
    app.listen(options.port || 3000);
}

module.exports = createServer;
//# sourceMappingURL=server.js.map
