"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ResponseDto", {
    enumerable: true,
    get: function() {
        return ResponseDto;
    }
});
let ResponseDto = class ResponseDto {
    constructor(success, data, message, errors){
        this.success = success;
        this.data = data;
        this.message = message;
        this.errors = errors;
    }
};

//# sourceMappingURL=response-interceptor.dto.js.map