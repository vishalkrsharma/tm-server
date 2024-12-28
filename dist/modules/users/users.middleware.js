"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersMiddleware", {
    enumerable: true,
    get: function() {
        return UsersMiddleware;
    }
});
const _common = require("@nestjs/common");
const _mongoose = require("@nestjs/mongoose");
const _mongoose1 = require("mongoose");
const _password = require("../../common/utils/password");
const _userschema = require("../../schemas/user.schema");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let UsersMiddleware = class UsersMiddleware {
    async onModuleInit() {
        this.userModel.schema.pre('save', async function(next) {
            const user = this;
            if (!user.isModified('password')) {
                return next();
            }
            try {
                user.password = await (0, _password.hashPassword)(user.password);
                next();
            } catch (err) {
                next(err);
            }
        });
    }
    constructor(userModel){
        this.userModel = userModel;
    }
};
UsersMiddleware = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose.InjectModel)(_userschema.User.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose1.Model === "undefined" ? Object : _mongoose1.Model
    ])
], UsersMiddleware);

//# sourceMappingURL=users.middleware.js.map