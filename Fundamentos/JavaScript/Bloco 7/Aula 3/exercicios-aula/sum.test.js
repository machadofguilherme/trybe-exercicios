const sum = (a, b) => a + b;

test('Soma dois valores', () => {
  expect(sum(2, 3)).toEqual(5);
});