function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome+"Diz Olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.dizOi = function(_)
}

const pessoa1 = new Pessoa("Maria")
const Funcionario1 = new Funcionario("Maria", "Dev-Front-End", 5000);
pessoa1.dizOi();

console.log(pessoa1);
console.log(Funcionario1);