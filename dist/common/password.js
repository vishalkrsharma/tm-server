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
    comparePassword: function() {
        return comparePassword;
    },
    hashPassword: function() {
        return hashPassword;
    }
});
const _bcryptjs = /*#__PURE__*/ _interop_require_default(require("bcryptjs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hashPassword = async (password)=>{
    return await _bcryptjs.default.hash(password, await _bcryptjs.default.genSalt(10));
};
const comparePassword = async (password, hashedPassword)=>{
    return await _bcryptjs.default.compare(password, hashedPassword);
};

//# sourceMappingURL=password.js.map