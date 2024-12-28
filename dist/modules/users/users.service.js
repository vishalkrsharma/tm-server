"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersService", {
    enumerable: true,
    get: function() {
        return UsersService;
    }
});
const _common = require("@nestjs/common");
const _userschema = require("../../schemas/user.schema");
const _mongoose = require("mongoose");
const _mongoose1 = require("@nestjs/mongoose");
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
let UsersService = class UsersService {
    async findOne({ username, email }) {
        const user = await this.userModel.findOne({
            $or: [
                {
                    username
                },
                {
                    email
                }
            ]
        });
        return user;
    }
    async create(user) {
        const createdUser = await this.userModel.create(user);
        return createdUser.save();
    }
    constructor(userModel){
        this.userModel = userModel;
    }
};
UsersService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _mongoose1.InjectModel)(_userschema.User.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _mongoose.Model === "undefined" ? Object : _mongoose.Model
    ])
], UsersService);

//# sourceMappingURL=users.service.js.map