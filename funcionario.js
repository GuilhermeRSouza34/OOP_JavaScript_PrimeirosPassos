function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome+"Diz Olá");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = 0;

    Pessoa.call(this, nome)
}

const Funcionario1 = new Funcionario("Maria", "Dev-Front-End", 5000);
const pessoa = new Pessoa("Guilherme");

Funcionario1.dizOi();
Funcionario1.dizCargo();

console.log(Funcionario1)
