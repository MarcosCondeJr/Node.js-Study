// O Objcet.freeze congela o objeto e faz com que não consiga mudar os seus valores

global.MinhaApp = Object.freeze({
    nome: 'Sistema Legal',
    saudacao() {
        return 'Olá Bomdia';
    }
});