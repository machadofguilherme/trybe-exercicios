let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero;

for (let index = 0; index < numbers.length; index += 1) {
    menorNumero = numbers.sort( (a, b) => {return a - b} );
}

console.log(menorNumero[0]);