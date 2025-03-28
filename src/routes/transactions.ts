import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import crypto from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    // inserindo dados na tabela
    const transaction = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'transação de teste',
        amount: 1000,
      })
      .returning('*')

    return transaction
  })

  app.get('/buscar', async () => {
    // inserindo dados na tabela
    const transaction = await knex('transactions').select('*')

    return transaction
  })
}
