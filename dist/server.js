"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var get_payload_1 = require("./get-payload");
var next_utils_1 = require("./next-utils");
var build_1 = __importDefault(require("next/dist/build"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var PORT = Number(process.env.PORT) || 3000;
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var payload_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Starting server...');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                console.log('Initializing Payload...');
                return [4 /*yield*/, (0, get_payload_1.getPayloadClient)({
                        initOptions: {
                            express: app,
                            onInit: function (cms) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    cms.logger.info("Admin URL: ".concat(cms.getAdminURL()));
                                    return [2 /*return*/];
                                });
                            }); },
                        },
                    })];
            case 2:
                payload_1 = _a.sent();
                console.log('Payload initialized');
                if (process.env.NEXT_BUILD) {
                    console.log('Next.js build process starting...');
                    app.listen(PORT, function () { return __awaiter(void 0, void 0, void 0, function () {
                        var err_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    payload_1.logger.info('Next.js is building for production');
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    //@ts-expect-error
                                    return [4 /*yield*/, (0, build_1.default)(path_1.default.join(__dirname, '../'))];
                                case 2:
                                    //@ts-expect-error
                                    _a.sent();
                                    console.log('Next.js build completed');
                                    process.exit(0);
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_2 = _a.sent();
                                    console.error('Error building Next.js:', err_2);
                                    process.exit(1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                }
                // Add logging middleware
                app.use(function (req, res, next) {
                    console.log("Incoming request: ".concat(req.method, " ").concat(req.url));
                    next();
                });
                console.log('Setting up test route...');
                // Add the test route here
                app.get('/test', function (req, res) {
                    console.log('Test route accessed');
                    res.send('Server is running correctly');
                });
                // Handle Payload routes
                if (payload_1.express) {
                    console.log('Setting up Payload routes');
                    app.use(payload_1.express);
                }
                else {
                    console.warn('payload.express is not available');
                }
                // Handle Next.js routes
                console.log('Setting up Next.js handler');
                app.use(function (req, res, next) {
                    console.log("Passing request to Next.js: ".concat(req.method, " ").concat(req.url));
                    return (0, next_utils_1.nextHandler)(req, res);
                });
                next_utils_1.nextApp.prepare().then(function () {
                    payload_1.logger.info('Next.js started');
                    app.listen(PORT, function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            payload_1.logger.info("App URL: ".concat(process.env.NEXT_PUBLIC_SERVER_URL));
                            console.log("Server is running on port ".concat(PORT));
                            return [2 /*return*/];
                        });
                    }); });
                });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error('Error starting server:', err_1);
                if (err_1 instanceof Error) {
                    console.error('Error message:', err_1.message);
                    console.error('Error stack:', err_1.stack);
                }
                process.exit(1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
start().catch(function (err) {
    console.error('Unhandled error in start function:', err);
    process.exit(1);
});
