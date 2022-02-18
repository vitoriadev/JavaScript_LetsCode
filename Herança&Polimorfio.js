class Pessoa {
    constructor(Nome, idade){
        this.Nome = Nome;
        this.idade = idade;
    }
    }
    
class Cidadão extends Pessoa {
    constructor(Nome, idade, rg, cpf){
        super(Nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadão = new Cidadão('Leonardo', 21, '2587412', '10436781792');
console.log(cidadão);