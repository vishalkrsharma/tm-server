"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _authservice = require("./auth.service");
describe('AuthService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _authservice.AuthService
            ]
        }).compile();
        service = module.get(_authservice.AuthService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});

//# sourceMappingURL=auth.service.spec.js.map