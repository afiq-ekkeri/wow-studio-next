import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";



import path from 'path'
import dotenv from 'dotenv'
import { Media } from './collections/Media'

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

  

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
     collections: [Media],
    routes: {
        admin: '/admin-login',
    },
    plugins: [
        cloudStorage({
          collections: {
            media: {
              adapter: s3Adapter({
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
        bundler: webpackBundler(),
        meta: {
            titleSuffix: " - WowStudio"
        }
    },
    editor: lexicalEditor({}),
    rateLimit: {
        max: 2000,
    },
    upload: {
        limits: {
          fileSize: 100000,
        },
    },
    db: postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' 
          ? { rejectUnauthorized: true } 
          : { rejectUnauthorized: false }
      }
    }),
    typescript: {
      outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
})
