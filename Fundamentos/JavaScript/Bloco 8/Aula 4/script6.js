const books = require('./books');

// 🚀 4- Encontre o livro com o maior nome.

function longestNamedBook() {
  // escreva seu código aqui
    return books
      .reduce((total, atual) => total.name.length > atual.name.length ? total : atual);
}

console.log(longestNamedBook());
