// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let fewArray = [2, 3, 2, 5, 8, 2, 3];

let c = null;
let x = null;

function repeatNumber(array) {
    
    for (let index = 0; index < array.length; index += 1) {
        x += array[index];
            
        if (x == array[index]) {
                c += x;
            }

    }
    
    console.log(c);

}

repeatNumber(fewArray);