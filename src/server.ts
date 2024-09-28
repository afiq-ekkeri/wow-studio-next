import express from 'express';
import { getPayloadClient } from './get-payload'
import { nextApp, nextHandler } from './next-utils'
import * as trpcExpress from '@trpc/server/adapters/express'
import nextBuild from 'next/dist/build'
import { inferAsyncReturnType } from "@trpc/server";
import path from 'path'

const app = express()

const PORT = Number(process.env.PORT) || 3000;

const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({
    req,
    res,
})
export type ExpressContext = inferAsyncReturnType<typeof createContext>

const start = async () => {
  try {
    const payload = await getPayloadClient({
      initOptions: {
        express: app,
        onInit: async (cms) => {
          cms.logger.info(`Admin URL: ${cms.getAdminURL()}`)
        },
      },
    })
  
    if (process.env.NEXT_BUILD) {
      app.listen(PORT, async () => {
        payload.logger.info('Next.js is building for production')
  
        try {
          //@ts-expect-error
          await nextBuild(path.join(__dirname, '../'))
          process.exit(0)
        } catch (err) {
          console.error('Error building Next.js:', err)
          process.exit(1)
        }
      })
  
      return
    }
  
    app.use((req, res) => nextHandler(req, res))
  
    nextApp.prepare().then(() => {
      payload.logger.info('Next.js started')
  
      app.listen(PORT, async () => {
        payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
      })
    })
  } catch (err) {
    console.error('Error starting server:', err)
    if (err instanceof Error) {
      console.error('Error message:', err.message)
      console.error('Error stack:', err.stack)
    }
    process.exit(1)
  }
}

start().catch(err => {
  console.error('Unhandled error in start function:', err)
  process.exit(1)
})