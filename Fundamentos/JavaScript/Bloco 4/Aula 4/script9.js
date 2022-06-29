// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function returnIndex(array) {
    let n = Math.max.apply(null, array);

    for (const x in array) {
        if ( n === array[x] ) {
            console.log( fewArray.indexOf(n) );
        }

    }
}

let fewArray = [2, 3, 6, 7, 10, 1, 100, 1876, 200, 13];

returnIndex(fewArray);