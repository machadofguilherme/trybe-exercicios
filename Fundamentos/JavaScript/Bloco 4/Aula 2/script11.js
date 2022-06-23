let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = [];

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexNumbers] % 2 !== 0) {
        numerosImpares.push(numbers[indexNumbers]);
    }
}

for (let indexImpares = 0; indexImpares < numerosImpares.length; indexImpares += 1) {
    if (numerosImpares === '') {
        console.log('nenhum valor ímpar encontrado');
    }
}

console.log('Quantidade de números ímpares: ' + numerosImpares.length);