"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _password = require("../../common/utils/password");
const _usersservice = require("../users/users.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthService = class AuthService {
    async signup(signupDto) {
        const { username, email, password } = signupDto;
        const existingUser = await this.usersService.findOne({
            email,
            username
        });
        if (existingUser) {
            throw new _common.HttpException({
                message: 'User already exists'
            }, _common.HttpStatus.CONFLICT);
        }
        const createdUser = await this.usersService.create({
            username,
            email,
            password
        });
        const { password: createdUserPassword, ...createdUserWithoutPassword } = createdUser.toObject();
        const token = this.jwtService.sign({
            userId: createdUser._id
        });
        return {
            message: 'User successfully registered',
            user: createdUserWithoutPassword,
            token
        };
    }
    async signin(signinDto) {
        const { username, email, password } = signinDto;
        const existingUser = await this.usersService.findOne({
            email,
            username
        });
        const checkPassword = await (0, _password.comparePassword)(password, existingUser.password);
        if (!checkPassword) {
            throw new _common.HttpException({
                message: 'Invalid password'
            }, _common.HttpStatus.FORBIDDEN);
        }
        const token = this.jwtService.sign({
            email
        });
        const { password: existingUserPassword, ...existingUserWithoutPassword } = existingUser.toObject();
        return {
            message: 'User successfully logged in',
            user: existingUserWithoutPassword,
            token
        };
    }
    constructor(usersService, jwtService){
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _usersservice.UsersService === "undefined" ? Object : _usersservice.UsersService,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService
    ])
], AuthService);

//# sourceMappingURL=auth.service.js.map