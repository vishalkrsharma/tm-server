"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SignupDto", {
    enumerable: true,
    get: function() {
        return SignupDto;
    }
});
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SignupDto = class SignupDto {
};
_ts_decorate([
    (0, _classvalidator.IsString)({
        message: 'Username must be a string'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: 'Username is required'
    }),
    (0, _classvalidator.MinLength)(4, {
        message: 'Username must be at least 4 characters long'
    }),
    (0, _classvalidator.MaxLength)(20, {
        message: 'Username must be at most 20 characters long'
    }),
    _ts_metadata("design:type", String)
], SignupDto.prototype, "username", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)({
        message: 'Email must be a string'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: 'Email is required'
    }),
    (0, _classvalidator.IsEmail)({}, {
        message: 'Email must be a valid email address'
    }),
    _ts_metadata("design:type", String)
], SignupDto.prototype, "email", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)({
        message: 'Password must be a string'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: 'Password is required'
    }),
    (0, _classvalidator.MinLength)(4, {
        message: 'Password must be at least 4 characters long'
    }),
    _ts_metadata("design:type", String)
], SignupDto.prototype, "password", void 0);

//# sourceMappingURL=signup-dto.js.map