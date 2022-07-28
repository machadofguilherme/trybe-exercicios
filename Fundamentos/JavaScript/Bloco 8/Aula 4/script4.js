const books = require('./books');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames() {
  // escreva seu código aqui
  return books.map((element) => element.author.name)
  .reduce((total, atual) => `${total}, ${atual}`);
}

console.log(reduceNames());
