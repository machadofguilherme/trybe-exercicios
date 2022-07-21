// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const draw = (bet) => {
  let ramdomValue = Math.random(bet) * 5;
  let luckyNumber = Math.round(ramdomValue);
  drawResult(bet, luckyNumber);
}

const drawResult = (bet, luckyNumber) => {
  if (luckyNumber === bet) {
    console.log(`Parabéns você ganhou: ${bet} é igual a ${luckyNumber}`); 
  } else {
    console.log('Tente novamente');
  }
};

draw(2);