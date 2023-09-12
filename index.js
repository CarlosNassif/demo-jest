const Calculadora = require('./Calculadora.js');

const calc = new Calculadora();

console.log('Soma 2 e 3:', calc.somar(2, 3));
console.log('Divide 10 e 2:', calc.dividir(10, 2));
console.log('Multiplica 10 e 2:', calc.multiplicar(10, 2));
console.log('Subtrai 10 e 2:', calc.subtrair(10, 2));