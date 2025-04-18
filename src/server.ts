/**
 * Para instalar o fastify:
 * npm i fastify
 * 
 * Necessário instalar também o pacote @types/node
 * npm install -D @types/node  
 * 
 * Instalar a ferramenta tsx
 * 
 * npm install tsx -D
 * 
 * Rodar sem converter o arquivo para js:
 * 
 * npx tsx src/server.ts
 * 
 * posso criar um script personalizado para rodar o projeto, va em 
 * package.json e adicione na chave scripts
 * 
 * "scripts": {
  *  "dev": "tsx watch src/server.ts"
  *},

  *Instalar o EsLint:
  *npm install eslint @rocketseat/eslint-config -D  

  Para funcionar o eslint e modificar ao salvar, você deve ir no arquivo de configuração Open User Settings Json
  "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
  } 

  Além disso deve adicionar um script para atualizar automaticamente todos os arquivos .ts
  ao rodar o comando pra startar o servidor no arquivo package.json
  "scripts": {
  
    "lint": "eslint src --ext .ts --fix"
  },
  alem de mostrar o erro, ele tenta corrigir automaticamente

  Instalar o knex para trabalhar com query buikder
  npm install knex --save

  instalar o driver
  
  npm install better-sqlite3

  npm install knex -g

  npm install sqlite3 --save

  knex init -x ts

  Plugins do fastify

  Teste: https://vitest.dev/
  npm i vitest -D   
 */

import { app } from './app'
import { envVariables } from './env/index'

app
  .listen({
    port: envVariables.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNING✅✅✅✅')
  })

// Eslint => Processo de Padronizar o código
