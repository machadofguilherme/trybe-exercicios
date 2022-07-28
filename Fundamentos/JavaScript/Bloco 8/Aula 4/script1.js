const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pairNumbers = () => {
  return numbers
    .reduce((total, atual) => (atual % 2 === 0) ? total + atual : total);
}

console.log(pairNumbers());
