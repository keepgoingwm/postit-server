import Koa from 'koa';
import path from 'path';
import log4js from 'koa-log4';

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

var Lifecycles = [
    'auth',
    'prepare'
];

var Postit = /** @class */ (function () {
    function Postit() {
    }
    Postit.prototype.run = function () {
        Lifecycles.forEach(function (e) {
            console.log(e);
        });
    };
    return Postit;
}());

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
        this.app.use(function (ctx, next) {
            ctx.body = 'hello';
            var postit = new Postit();
            _this.logger.info(postit);
        });
        this.app.listen(this.options.port);
    };
    return Server;
}());

// exports
// --------------------------------------------------------------------------------------------------
var version = '0.0.1';

export { Server, version };
//# sourceMappingURL=postit-server.esm.js.map
