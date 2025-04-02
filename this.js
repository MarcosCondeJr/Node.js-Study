console.log(this === global);  // Falso
console.log(this === module);  // Falso

console.log(this === exports);  // True
console.log(this === module.exports);  // true

function logThis() {
    console.log('Dentro de uma função.....');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis();

// Dentro de uma função, o this vamos acessar o global e não mais o module.exports, 
// mas se for um arrow function o this vai apontar para o module.exports