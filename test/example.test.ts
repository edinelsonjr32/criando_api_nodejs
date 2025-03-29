import { expect, test } from 'vitest'

/**
 * Para rodar o teste execute:
 *
 * npx vitest
 *
 * alterar no package.json adicionando um comando
 *
 * test
 *
 */
test('O Usuário consegue criar uma nova transação', () => {
  // fazer chamada http p criar uma nova transação
  const responseStatusCode = 201
  expect(responseStatusCode).toEqual(201)
})
