import express from 'express';
import { getPayloadClient } from './get-payload'
import { nextApp, nextHandler } from './next-utils'
import nextBuild from 'next/dist/build'
import path from 'path'

const app = express()
const PORT = Number(process.env.PORT) || 3000;

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
    // Add logging middleware
    app.use((req, res, next) => {
      console.log(`Incoming request: ${req.method} ${req.url}`)
      next()
    })
    app.get('/test', (req, res) => {
      res.send('Server is running correctly')
    })
    // Handle Payload routes
    if (payload.express) {
      console.log('Setting up Payload routes')
      app.use(payload.express)
    } else {
      console.warn('payload.express is not available')
    }

    // Handle Next.js routes
    console.log('Setting up Next.js handler')
    app.use((req, res, next) => {
      console.log(`Passing request to Next.js: ${req.method} ${req.url}`)
      return nextHandler(req, res)
    })
  
    nextApp.prepare().then(() => {
      payload.logger.info('Next.js started')
  
      app.listen(PORT, async () => {
        payload.logger.info(`App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
        console.log(`Server is running on port ${PORT}`)
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