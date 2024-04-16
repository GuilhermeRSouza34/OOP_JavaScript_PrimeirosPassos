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
    // this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return `O Salario de ${this.nome} é R$${_salario}`;
    }


    //getters and setters
    this.setSalario = function(valor) {
        if (typeof valor === "number") {
            _salario = valor;

        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome)
}

const Funcionario1 = new Funcionario("Maria", "Dev-Front-End", 5000);
const pessoa = new Pessoa("Guilherme");

Funcionario1.dizOi();
Funcionario1.dizCargo();

Funcionario1.setSalario(7000);

console.log(Funcionario1.getSalario())
