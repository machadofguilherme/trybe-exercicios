// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array1 = ['java', 'javascript', 'python', 'html', 'css'];
let qtd1 = 0;

for (let index = 0; index < array1.length; index += 1) {
    qtd1 = array1[index].length;
    if (qtd1 > array1[index + 1]) {
        array1[index + 1] = array1[index];
    } else {
        array1[index] = array1[index + 1];
    }
}

console.log(array1[0]);

// ------------------------------------------------------------------

let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let qtd2 = 0;

for (let index = 0; index < array2.length; index += 1) {
   
    qtd2 += array2[index];
    qtdCompare = array2[index + 1];

    for (let index2 = 0; index2 < array2.length; index2 += 1) {
    
        if (qtd2.length >= qtdCompare) {    
            array2[index] = array2[index];
        } else {
            array2[index] = array2[index + 1];
        }
    }
}

console.log(array2.sort()[0] );