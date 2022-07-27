// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = ['Aanemarie'];

function containsA() {
  // escreva seu código aqui
   const list = names.filter((element) => element.toLowerCase().split(''))
    .reduce((total, atual) => atual == 'a' ? total + atual : total, '');
   return list;
}

console.log(containsA());
