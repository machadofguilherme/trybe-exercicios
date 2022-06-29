// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let numbersArray = [2, 3, 2, 5, 8, 2, 3];
let count = 0;
let result;

function moreRepeat(array) {
    numbersArray.sort();

    for (let index = 0; index < array.length; index += 1) {
        if (array[index] === array[index + 1]) {
            count += 1;
            result = numbersArray.find( element => element * count );
        }
    }

    console.log(result);
}

moreRepeat(numbersArray);