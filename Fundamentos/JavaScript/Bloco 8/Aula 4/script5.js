const books = require("./books");

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge() {
  // escreva seu código aqui
   const authorAge = books.map((element) => {
    const dateAge = element.author.birthYear - element.releaseYear;
    return dateAge;
  });

  let resultAge = authorAge
    .reduce((total, atual) => total + atual) / authorAge.length;
    return resultAge.toString().replace('-', '');
}

console.log(averageAge());
