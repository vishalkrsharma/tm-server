"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _responseinterceptor = require("../common/interceptors/response.interceptor");
describe('ResponseInterceptorService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _responseinterceptor.ResponseInterceptorService
            ]
        }).compile();
        service = module.get(_responseinterceptor.ResponseInterceptorService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});

//# sourceMappingURL=response-interceptor.service.spec.js.map