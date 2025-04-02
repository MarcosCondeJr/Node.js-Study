const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = (funcionario) => {
    return funcionario.pais === 'China';
}

const mulheres = (funcionario) => {
    return funcionario.genero === 'F';
}

const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    // console.log(funcionarios);

    // Mulher Chinesa com menor Salário
    
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);

    console.log(func);
});

