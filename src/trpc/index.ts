import { z } from 'zod'
import { authRouter } from './auth-router'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { paymentRouter } from './payment-router'

export const appRouter = router({
  auth: authRouter,
  payment: paymentRouter,


})

export type AppRouter = typeof appRouter
