import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'
export const app = fastify()

app.register(cookie)
app.addHook('preHandler', async (request) => {
  console.log(`[${request.method} ${request.url}]`)
})
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
app.get('/hello', () => {
  return 'hello'
})
/**
 * Métodos de Rotas
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

// http:localhost:3333/hello
