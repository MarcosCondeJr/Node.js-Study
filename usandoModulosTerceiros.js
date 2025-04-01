// Usando modulos de terceiros

// const _ = require('lodash');
// setInterval(() => console.log(_.random(50,100)),2000);

// const saudacao = require('saudacao');
// console.log(saudacao.ola);

const c = require('./pastaA/pastaB/pastaC');
console.log(c.ola2)

// const http = require('http');
// http.createServer((req, res) => {
//     res.write('Boa noite!');
//     res.end();
// }).listen(8080);