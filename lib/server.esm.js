import Koa from 'koa';

function createServer(options) {
    if (options === void 0) { options = {}; }
    var app = new Koa();
    app.use(function (ctx) {
        ctx.body = 'hello';
    });
    app.listen(options.port || 3000);
}

export default createServer;
//# sourceMappingURL=server.esm.js.map
