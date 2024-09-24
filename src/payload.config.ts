import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [],
    routes: {
        admin: '/admin-login',
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: " - WowStudio"
        }
    },
    editor: lexicalEditor({}),
    rateLimit: {
        max: 2000,
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false,
                ca: process.env.CA_CERT
            }
        }
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
})
