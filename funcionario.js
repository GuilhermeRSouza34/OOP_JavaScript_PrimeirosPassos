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
        return _salario;
    }


    //getters and setters
    this.setSalario = function(valor) {
        if (typeof valor === "number") {
            _salario = valor;

        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
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
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }

}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.09;
        this.setSalario(novoSalario);
    }

}

const Funcionario1 = new Funcionario("Maria", "Dev-Front-End", 5000);
const Funcionario2 = new Gestor("Pedro");
const Funcionario3 = new Estagiario("Raul");

//const pessoa = new Pessoa("Guilherme");

//Funcionario1.dizOi();
//Funcionario1.dizCargo();

//Funcionario1.setSalario(7000);

//console.log(Funcionario1.getSalario())

Funcionario1.aumento();
console.log(Funcionario1.getSalario())

Funcionario2.aumento();
console.log(Funcionario2.getSalario())

Funcionario3.aumento();
console.log(Funcionario3.getSalario())

