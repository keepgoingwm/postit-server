'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));

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
//# sourceMappingURL=postit-server.js.map
