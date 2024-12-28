"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _authcontroller = require("./auth.controller");
describe('AuthController', ()=>{
    let controller;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            controllers: [
                _authcontroller.AuthController
            ]
        }).compile();
        controller = module.get(_authcontroller.AuthController);
    });
    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    });
});

//# sourceMappingURL=auth.controller.spec.js.map