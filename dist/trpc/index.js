"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var authRouter_1 = require("./authRouter");
var trpc_1 = require("./trpc");
exports.appRouter = (0, trpc_1.router)({
    auth: authRouter_1.authRouter
});
