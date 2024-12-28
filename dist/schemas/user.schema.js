"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    User: function() {
        return User;
    },
    UserSchema: function() {
        return UserSchema;
    }
});
const _mongoose = require("@nestjs/mongoose");
const _password = require("../common/utils/password");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let User = class User {
};
_ts_decorate([
    (0, _mongoose.Prop)({
        unique: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "username", void 0);
_ts_decorate([
    (0, _mongoose.Prop)({
        unique: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
    (0, _mongoose.Prop)(),
    _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
User = _ts_decorate([
    (0, _mongoose.Schema)({
        timestamps: true
    })
], User);
const UserSchema = _mongoose.SchemaFactory.createForClass(User);
UserSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        user.password = await (0, _password.hashPassword)(user.password);
        next();
    } catch (error) {
        next(error);
    }
});

//# sourceMappingURL=user.schema.js.map