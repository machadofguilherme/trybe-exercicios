let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaisAlto;
for (let index = 0; index < numbers.length; index += 1) {
    numeroMaisAlto = numbers.sort( (a, b) => {return a - b} );
}

console.log(numeroMaisAlto[numeroMaisAlto.length - 1]);