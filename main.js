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