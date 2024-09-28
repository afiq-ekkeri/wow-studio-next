"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var db_postgres_1 = require("@payloadcms/db-postgres");
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var plugin_cloud_storage_1 = require("@payloadcms/plugin-cloud-storage");
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var Media_1 = require("./collections/Media");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
// const sslCert = fs.readFileSync('./../ca-certificate.crt').toString()
var getSSLConfig = function () {
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('SSL_CERT_BASE64 present:', !!process.env.SSL_CERT_BASE64);
    if (process.env.NODE_ENV === 'production') {
        console.log('Production environment detected');
        if (process.env.SSL_CERT_BASE64) {
            console.log('Using provided SSL certificate');
            var decodedCert = Buffer.from(process.env.SSL_CERT_BASE64, 'base64').toString('utf-8');
            return {
                rejectUnauthorized: true,
                ca: decodedCert
            };
        }
        else {
            console.warn('No SSL certificate provided, SSL verification will be disabled');
            return {
                rejectUnauthorized: false
            };
        }
    }
    console.log('Not in production, SSL disabled');
    return false;
};
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Media_1.Media],
    routes: {
        admin: '/admin-login',
    },
    plugins: [
        (0, plugin_cloud_storage_1.cloudStorage)({
            collections: {
                media: {
                    adapter: (0, s3_1.s3Adapter)({
                        config: {
                            endpoint: process.env.S3_ENDPOINT || '',
                            region: process.env.S3_REGION,
                            credentials: {
                                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                            },
                            forcePathStyle: true,
                        },
                        bucket: process.env.S3_BUCKET || '',
                    }),
                },
            },
        }),
    ],
    admin: {
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: " - WowStudio"
        }
    },
    editor: (0, richtext_lexical_1.lexicalEditor)({}),
    rateLimit: {
        max: 2000,
    },
    upload: {
        limits: {
            fileSize: 100000,
        },
    },
    db: (0, db_postgres_1.postgresAdapter)({
        pool: {
            connectionString: process.env.DATABASE_URL,
            ssl: getSSLConfig()
        }
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
});
