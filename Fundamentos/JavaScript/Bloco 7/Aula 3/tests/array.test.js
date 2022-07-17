const myRemove = require('../array');

describe('Verifica possíveis retornos da função myRemove.', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    const newArr = [1, 2, 4];
    expect(myRemove(arr, 3)).toEqual(newArr);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    const newArr = [1, 2, 4];
    expect(myRemove(arr, 3)).not.toBe(newArr);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    const newArr = [1, 2, 3, 4];
    expect(myRemove(arr, 5)).toEqual(newArr);
  })
})