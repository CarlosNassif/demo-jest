class Calculadora {
  somar(a, b) {
    if (typeof a !== 'number') {
      throw new Error('Primeiro argumento é inválido');
    }
    if (typeof b !== 'number') {
      throw new Error('Segundo argumento é inválido');
    }

    return a + b;
  }

  subtrair(a, b) {
    if (typeof a !== 'number') {
      throw new Error('Primeiro argumento é inválido');
    }
    if (typeof b !== 'number') {
      throw new Error('Segundo argumento é inválido');
    }

    return a - b;
  }

  dividir(a, b) {
    if (typeof a !== 'number') {
      throw new Error('Primeiro argumento é inválido');
    }
    if (typeof b !== 'number') {
      throw new Error('Segundo argumento é inválido');
    }
    
    return a / b;
  }

  multiplicar(a, b) {
    if (typeof a !== 'number') {
      throw new Error('Primeiro argumento é inválido');
    }
    if (typeof b !== 'number') {
      throw new Error('Segundo argumento é inválido');
    }

    return a * b;
  }

  constructor() {
    console.log('Calculadora criada!');
  }
}

module.exports = Calculadora;
