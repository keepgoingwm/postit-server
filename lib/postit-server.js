'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));
var path = _interopDefault(require('path'));
var log4js = _interopDefault(require('koa-log4'));
var Router = _interopDefault(require('koa-rest-router'));

var logger;
function accessLogger() {
    return log4js.koaLogger(log4js.getLogger('access'));
}
try {
    log4js.configure(path.join(__dirname, '../logger.configs.json'));
    logger = log4js.getLogger('application');
}
catch (err) {
    log4js.configure(path.join(__dirname, '../logger.config.default.json'));
    logger = log4js.getLogger('server');
    logger.warn('no logger config file(logger.config.json), use logger.config.default.json as default');
}

var docController = {
    name: 'docs',
    controller: {
        index: function (ctx, next) {
            ctx.body = 'doc';
        }
    }
};

var router = Router({ prefix: '/v1'  }).loadMethods();
router.resource(docController.name, docController.controller);

var Server = /** @class */ (function () {
    function Server(_a) {
        var _b = (_a === void 0 ? {} : _a).port, port = _b === void 0 ? 3000 : _b;
        this.logger = logger;
        this.options = {};
        this.options.port = port;
    }
    Server.prototype.start = function () {
        var _this = this;
        this.app = new Koa();
        this.app.use(accessLogger());
        this.app.on('error', function (err) {
            _this.logger.error(err);
        });
        this.app.use(router.middleware());
        // this.app.use((ctx: Context, next: Next) => {
        //   ctx.body = 'hello'
        //   let postit: Postit = new Postit()
        //   this.logger.info(postit)
        // })
        this.app.listen(this.options.port);
    };
    return Server;
}());

// exports
// --------------------------------------------------------------------------------------------------
var version = '0.0.1';

exports.Server = Server;
exports.version = version;
//# sourceMappingURL=postit-server.js.map
