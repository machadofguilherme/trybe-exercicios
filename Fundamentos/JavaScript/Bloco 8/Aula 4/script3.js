// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.map((element) => {
    return element.reduce((total, atual) => `${total} ${atual}`);
  });
}

console.log(flatten());
