import { beforeAll, afterAll, describe, it, expect } from 'vitest'
import { app } from '../src/app'

import request from 'supertest'
/**
 * Para rodar o teste execute:
 *
 * npx vitest
 *
 * alterar no package.json adicionando um comando
 *
 * test
 *
 *
 * Adicionar uma nova dependencia:
 * Supertest
 * npm install supertest -D
 *
 * npm install --save @types/supertest -D
 *
 */

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    // fazer chamada http p criar uma nova transação
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        amount: 1000,
        type: 'credit',
      })
      .expect(201)
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        amount: 1000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New Transaction',
        amount: 1000,
      }),
    ])
  })
})
