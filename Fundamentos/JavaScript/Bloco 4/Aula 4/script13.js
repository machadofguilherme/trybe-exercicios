// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let sum = 0;

function sumAllNumbers(n) {

    for (let index = 1; index <= n; index += 1) {
       result = sum += index;
    }

    console.log(result);
    
}

sumAllNumbers(5);