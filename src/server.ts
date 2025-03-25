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
    "dev": "tsx watch src/server.ts"
  },
 */

import fastify from "fastify";

const app = fastify()

//Métodos de Rotas
/**
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

//http:localhost:3333/hello
app.get('/hello', ()=>{
    return 'hello World Edinelson'
})

app.listen({
    port: 3333
}).then(()=>{
    console.log('HTTP SERVER RUNING✅✅✅✅');
    
})