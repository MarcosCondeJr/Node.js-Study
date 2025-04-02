const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.incrementar();
contadorA.incrementar();

console.log(contadorA.valor, contadorB.valor);

contadorC.incrementar();
contadorC.incrementar();

// O valor do contador D não muda, por é um objeto novo 
console.log(contadorC.valor, contadorD.valor);