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

        console.log(novoSalario);
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome)
}

function Gestor(nome) {
    Funcionario.call(this, nome, "Gestor", 6000);

    this.aumento = function() {
        const novoSalario = _salario * 1.07;

        console.log(novoSalario);
        _salario = novoSalario;
    }

}

const Funcionario1 = new Funcionario("Maria", "Dev-Front-End", 5000);
const Funcionario2 = new Funcionario("Pedro", "Gestor", 6000);

//const pessoa = new Pessoa("Guilherme");

//Funcionario1.dizOi();
//Funcionario1.dizCargo();

//Funcionario1.setSalario(7000);

//console.log(Funcionario1.getSalario())

Funcionario1.aumento();
console.log(Funcionario1.getSalario())

Funcionario2.aumento();
console.log(Funcionario2.getSalario())