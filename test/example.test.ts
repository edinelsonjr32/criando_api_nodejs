import { test, beforeAll, afterAll } from 'vitest'
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
beforeAll(async () => {
  await app.ready()
})
afterAll(async () => {
  await app.close()
})
test('User can create a new transaction', async () => {
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
