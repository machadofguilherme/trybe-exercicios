// Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// Resultado: const listProducts = [{ Arroz: 2.99 },...]

const priceProducts = () => {
  return products.map((product, index) => {
    const listProducts = {};
    listProducts.product = product;
    listProducts.price   = prices[index];
    return console.log(listProducts);
  });
}

priceProducts();
