let a = 5;
let b = 5;
let operacao = 'a';

if (operacao === 'adição') {
    console.log(a + b);
} else if (operacao === 'subtração') {
    console.log(a - b);
} else if (operacao === 'multiplicação') {
    console.log(a * b);
} else if (operacao === 'divisão') {
    console.log(a / b);
} else if (operacao === 'módulo') {
    console.log(a % b);
} else {
    console.log('Operação inválida.');
}