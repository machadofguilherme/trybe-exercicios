const { professionalBoard, searchEmployee } = require('../prodata');

describe('Verifica se a função searchEmployee() é executada corretamente.', () => {
  test('Testa o retorno do id', () => {
      expect(searchEmployee('8579-6')).toBeTruthy();
  })

  test('Testa se o id é falso', () => {
    expect(searchEmployee('85')).toBeTruthy();
})
});