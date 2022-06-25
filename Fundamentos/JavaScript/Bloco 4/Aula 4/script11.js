// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let fewArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let newArray = [];

function moreCharacters(array) {
    
    for (names in array) {
        newArray.push(array[names].length);
    }

    let n = Math.max.apply(null, newArray);

    for (a in array) {

        if ( array[a].length === n ) {
            console.log( fewArray[a] );
        }

    }
}

moreCharacters(fewArray);