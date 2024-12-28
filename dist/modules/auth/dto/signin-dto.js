"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SigninDto", {
    enumerable: true,
    get: function() {
        return SigninDto;
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
// Custom validator to ensure at least one field (email or username) is provided
let AtLeastOneField = class AtLeastOneField {
    validate(_, args) {
        const { email, username } = args.object;
        return !!email || !!username; // Returns true if at least one of the fields is provided
    }
    defaultMessage(args) {
        return 'Either email or username must be provided';
    }
};
AtLeastOneField = _ts_decorate([
    (0, _classvalidator.ValidatorConstraint)({
        name: 'atLeastOneField',
        async: false
    })
], AtLeastOneField);
let SigninDto = class SigninDto {
};
_ts_decorate([
    (0, _classvalidator.IsString)({
        message: 'Email must be a string'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEmail)({}, {
        message: 'Email must be a valid email address'
    }),
    _ts_metadata("design:type", String)
], SigninDto.prototype, "email", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)({
        message: 'Username must be a string'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], SigninDto.prototype, "username", void 0);
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
], SigninDto.prototype, "password", void 0);
_ts_decorate([
    (0, _classvalidator.Validate)(AtLeastOneField, {
        message: 'Either email or username must be provided'
    }),
    _ts_metadata("design:type", Boolean)
], SigninDto.prototype, "validateAtLeastOneField", void 0);

//# sourceMappingURL=signin-dto.js.map