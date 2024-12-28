"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _common = require("@nestjs/common");
const _responseinterceptor = require("./common/interceptors/response.interceptor");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new _common.ValidationPipe());
    app.useGlobalInterceptors(new _responseinterceptor.ResponseInterceptor());
    app.enableCors({
        origin: process.env.CLIENT_URL
    });
    await app.listen(5000);
}
bootstrap();

//# sourceMappingURL=main.js.map