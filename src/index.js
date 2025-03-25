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
function calculaIdadeUsuario(user) {
    return new Date().getFullYear() - user.birthYear;
}
var resultado = calculaIdadeUsuario({
    birthYear: 1994
});
console.log(resultado);
