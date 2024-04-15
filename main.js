const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('Acelerando...')
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('Acelerando...')
    }
}

function carro(modelo,fabricante,anoModelo,anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log('Acelerando...')
    }
}

const carro1 = new carro('Fiesta','Ford',2020,2019);
const carro2 = new carro('Ka','Ford', 2021, 2020);

console.log(carro1);
console.log(carro2);

const nome = "Guilherme"
const idade = 20
const ehMaiorDeIdade = true
const conhecimentos = ["HTML","CSS","JS"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(carro1 instanceof carro)
console.log(conhecimentos instanceof Array)

function exibirAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibirAtributo('nome');

pessoa['sobrenome'] = undefined;

Object.freeze(pessoa);

pessoa.nome = "Joao";

if (pessoa['sobrenome']) {
    console.log("A pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log("tem um sobrenome")
}

console.log(pessoa .nome);
console.log(pessoa .idade);
console.log(pessoa .ehMaiorDeIdade);
console.log(pessoa .conhecimentos);
console.log(pessoa .pessoa);
console.log(pessoa .carro1);