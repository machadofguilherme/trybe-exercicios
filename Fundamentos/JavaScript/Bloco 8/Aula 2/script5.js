// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

const nomes = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (nomes, nome) => {
  //Adicione seu código aqui
  return nomes.some( (elemento) => elemento === nome );
}

console.log(hasName(nomes, 'Bruna'))