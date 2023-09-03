const Calculadora = require('./Calculadora.js');

describe('Testes Calculadora', () => {
  let calculadora;

  beforeAll(() => {
    calculadora = new Calculadora();
  });

  describe('Testes de Soma', () => {
    test('Deve somar dois inteiros', () => {
      expect(calculadora.somar(2, 3)).toBe(5);
    });

    test('Deve somar dois reais', () => {
      const res = calculadora.somar(2, Math.pow(2, 1 / 2));

      expect(res).toBeGreaterThan(3.41);
      expect(res).toBeLessThan(3.42);
    });

    describe('Não deve somar outros tipos sem ser `number`', () => {
      test.each([
        ['exemploString', 2],
        [{}, 2],
        [true, 2],
        [null, 2],
        [undefined, 2],
        [Symbol('foo'), 2],
      ])('par de dados: %p, %p deve dar erro', (a, b) => {
        expect(() => calculadora.somar(a, b)).toThrow(
          'Primeiro argumento é inválido'
        );
        expect(() => calculadora.somar(b, a)).toThrow(
          'Segundo argumento é inválido'
        );
      });
    });
  });
});
