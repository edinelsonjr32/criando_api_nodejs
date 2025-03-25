/**
 * Necessita instalar com dependencia de desenvolvimento o typescript
 * npm i -D typescript
 * 
 * Precisa criar o arquivo de configuração do typescript:
 * npx tsc --init
 * 
 * Ele cria o arquivo tsconfig.json 
 * 
 * Para converter o arquivo para js, deve executar:
 * npx tsc ./caminho_arquivo.ts
 */

interface User{
    birthYear: number
}

function calculaIdadeUsuario(user : User){
    return new Date().getFullYear()- user.birthYear
}




const resultado = calculaIdadeUsuario({
    birthYear: 1994
})
console.log(resultado);
