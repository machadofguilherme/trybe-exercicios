// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function returnIndex(array) {
    let n = Math.min.apply(null, array);

    for (min in array) {
        if ( n === array[min] ) {
            console.log( fewArray.indexOf(n) );
        }
        
    }
}

let fewArray = [2, 4, 6, 7, 10, 0, -3];

returnIndex(fewArray);