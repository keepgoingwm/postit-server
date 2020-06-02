'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));
var nodeConfig = _interopDefault(require('config'));
var log4js = _interopDefault(require('koa-log4'));
var Router = _interopDefault(require('koa-rest-router'));
var crypto = _interopDefault(require('crypto'));

var loggerDefaultConfig = {
    "appenders": {
        "access": {
            "type": "dateFile",
            "pattern": "-yyyy-MM-dd.log",
            "filename": "log/access.log"
        },
        "application": {
            "type": "dateFile",
            "pattern": "-yyyy-MM-dd.log",
            "filename": "log/app.log"
        },
        "console": {
            "type": "console"
        }
    },
    "categories": {
        "default": {
            "appenders": [
                "console"
            ],
            "level": "WARN"
        },
        "access": {
            "appenders": [
                "access"
            ],
            "level": "INFO"
        },
        "application": {
            "appenders": [
                "application"
            ],
            "level": "WARN"
        },
        "server": {
            "appenders": [
                "application",
                "console"
            ],
            "level": "WARN"
        }
    }
};

var coreDefaultConfig = {
    plugins: []
};

var postitConfig = nodeConfig.get('postit');
var conf = postitConfig.util.extendDeep({
    logger: loggerDefaultConfig,
    core: coreDefaultConfig
}, postitConfig);
var mergeConfig = postitConfig.util.extendDeep;

log4js.configure(conf.logger);
var logger = log4js.getLogger('application');
logger.warn('logger ready');
function accessLogger() {
    return log4js.koaLogger(log4js.getLogger('access'), {
        level: "auto"
    });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var docController = {
    name: 'docs',
    controller: {
        index: function (ctx, next) {
            ctx.body = 'doc';
        },
        create: function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.body = 'doc';
                return [2 /*return*/];
            });
        }); },
    }
};

var router = Router({ prefix: '/v1'  }).loadMethods();
router.resource(docController.name, docController.controller);

var HandlerStore = /** @class */ (function () {
    function HandlerStore() {
        this.store = {};
    }
    HandlerStore.prototype.getHandler = function (type, name) {
        var handlerOptions = this.getHandlerOptions(type);
        if (!handlerOptions) {
            throw new Error('no handler');
        }
        return handlerOptions[name];
    };
    HandlerStore.prototype.getHandlerOptions = function (type) {
        return this.store[type];
    };
    HandlerStore.prototype.hasHandlerOptions = function (type) {
        return Boolean(this.store[type]);
    };
    HandlerStore.prototype.registerHandler = function (type, options) {
        if (this.hasHandlerOptions(type)) ;
        this.store[type] = parseHandler(options);
    };
    HandlerStore.prototype.unregisterHandler = function (type) {
        if (this.hasHandlerOptions(type)) {
            delete this.store[type];
        }
    };
    HandlerStore.prototype.getAllHandlerOptions = function () {
        return this.store;
    };
    return HandlerStore;
}());
function parseHandler(options) {
    return options;
}

var Plugable = /** @class */ (function () {
    function Plugable(plugins) {
        if (plugins === void 0) { plugins = []; }
        this.handlerStore = new HandlerStore();
        this.registerPlugins(plugins);
    }
    Plugable.prototype.eachPluginDo = function (callback) {
        var allHandlerOptions = this.handlerStore.getAllHandlerOptions();
        Object.entries(allHandlerOptions).forEach(function (_a) {
            var type = _a[0], handlers = _a[1];
            console.log('object', type, handlers);
            callback(type, handlers);
        });
    };
    Plugable.prototype.registerPlugins = function (config) {
        var _this = this;
        config.forEach(function (plugin) {
            _this.handlerStore.registerHandler(plugin.type, plugin.handlers);
        });
    };
    return Plugable;
}());

var Lifecycle = /** @class */ (function (_super) {
    __extends(Lifecycle, _super);
    function Lifecycle(plugins) {
        return _super.call(this, plugins) || this;
    }
    Lifecycle.prototype.initAll = function () {
        this.eachPluginDo(function (type, handlers) {
            handlers.init();
        });
    };
    return Lifecycle;
}(Plugable));

var uid = 1;
var Postit = /** @class */ (function (_super) {
    __extends(Postit, _super);
    function Postit(options) {
        var _this = _super.call(this, options.plugins) || this;
        // TODO 合并配置
        _this.options = options;
        _this.uid = uid++;
        _this.initAll();
        return _this;
    }
    return Postit;
}(Lifecycle));

var randomString = function (length) {
    if (length === void 0) { length = 12; }
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex');
};

var Server = /** @class */ (function () {
    function Server(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.port, port = _c === void 0 ? 3000 : _c, _d = _b.core, core = _d === void 0 ? {} : _d;
        this.logger = logger;
        this.options = {};
        this.options.port = port;
        this.options.core = mergeConfig(conf.core, core);
    }
    Server.prototype.start = function () {
        var _this = this;
        this.app = new Koa();
        this.app.keys = Array.apply(null, { length: 5 }).map(randomString);
        this.app.context.postit = this.postit = new Postit(this.options.core);
        this.app.context.logger = this.logger;
        this.app.context.options = this.options;
        this.logger.info("init and mount Postit instance");
        this.app.use(accessLogger());
        this.app.on('error', function (err) {
            _this.logger.error(err);
        });
        this.app.use(router.middleware());
        this.app.listen(this.options.port);
    };
    return Server;
}());

// exports
// --------------------------------------------------------------------------------------------------
var version = '0.0.0';

exports.Server = Server;
exports.version = version;
//# sourceMappingURL=postit-server.js.map
