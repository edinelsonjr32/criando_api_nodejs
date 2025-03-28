import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import crypto, { randomUUID } from 'node:crypto'
import { z } from 'zod'

// cookies <-> Formas da gente manter contexto entre requisições
//
/**
 *
 * Para trabalhar com o fastify/cookie
 *
 * npm i @fastity/cookie
 */

export async function transactionsRoutes(app: FastifyInstance) {
  // Crirar a transação
  app.post('/', async (request, response) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()
      response.cookie('session_id', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }
    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    // HTTP codes ()
    return response.status(201).send()
  })

  // listagem de transações
  app.get('/', async () => {
    const transactions = await knex('transactions').select()

    return { transactions }
  })

  // buscar uma transação especifica
  app.get('/:id', async (request) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = getTransactionParamsSchema.parse(request.params)

    const transaction = await knex('transactions').where('id', id).first()

    return { transaction }
  })

  // somar todas as transações
  app.get('/sumary', async () => {
    const sumary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()

    return {
      sumary,
    }
  })
}
