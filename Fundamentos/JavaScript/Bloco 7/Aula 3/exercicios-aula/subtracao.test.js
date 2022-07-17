const subtracao = require('./subtracao');

test('Testa se a subtração entre um valor e outro ocorre adequadamente.', () => {
  expect(subtracao(10, 5)).toBe(5);
})