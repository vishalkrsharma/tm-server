"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ResponseInterceptor", {
    enumerable: true,
    get: function() {
        return ResponseInterceptor;
    }
});
const _common = require("@nestjs/common");
const _operators = require("rxjs/operators");
const _responseinterceptordto = require("../dto/response-interceptor.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, _operators.map)((data)=>{
            return new _responseinterceptordto.ResponseDto(true, data, 'Request Successful', null);
        }));
    }
};
ResponseInterceptor = _ts_decorate([
    (0, _common.Injectable)()
], ResponseInterceptor);

//# sourceMappingURL=response.interceptor.js.map