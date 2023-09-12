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

  describe('Testes de Divisão', () => {
    test('Deve dividir dois inteiros', () => {
      expect(calculadora.dividir(10, 2)).toBe(5);
    });

    test('Deve dividir dois reais', () => {
      const res = calculadora.dividir(2, Math.pow(2, 1 / 2));

      expect(res).toBeGreaterThan(1.4);
      expect(res).toBeLessThan(1.5);
    });

    describe('Não deve dividir outros tipos sem ser `number`', () => {
      test.each([
        ['exemploString', 2],
        [{}, 2],
        [true, 2],
        [null, 2],
        [undefined, 2],
        [Symbol('foo'), 2],
      ])('par de dados: %p, %p deve dar erro', (a, b) => {
        expect(() => calculadora.dividir(a, b)).toThrow(
          'Primeiro argumento é inválido'
        );
        expect(() => calculadora.dividir(b, a)).toThrow(
          'Segundo argumento é inválido'
        );
      });
    });
  });

  describe('Testes de Multiplicação', () => {
    test('Deve multiplicar dois inteiros', () => {
      expect(calculadora.multiplicar(10, 2)).toBe(20);
    });

    test('Deve multiplicar dois reais', () => {
      const res = calculadora.multiplicar(2, Math.pow(2, 1 / 2));

      expect(res).toBeGreaterThan(2.82);
      expect(res).toBeLessThan(2.83);
    });

    describe('Não deve multiplicar outros tipos sem ser `number`', () => {
      test.each([
        ['exemploString', 2],
        [{}, 2],
        [true, 2],
        [null, 2],
        [undefined, 2],
        [Symbol('foo'), 2],
      ])('par de dados: %p, %p deve dar erro', (a, b) => {
        expect(() => calculadora.multiplicar(a, b)).toThrow(
          'Primeiro argumento é inválido'
        );
        expect(() => calculadora.multiplicar(b, a)).toThrow(
          'Segundo argumento é inválido'
        );
      });
    });
  });
});
