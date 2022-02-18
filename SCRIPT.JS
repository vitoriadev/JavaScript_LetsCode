const pessoa = {Nome: 'Vitória', Idade: 21};


console.log(pessoa.Nome);
console.log(pessoa.Idade);


const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function(){return this.base*this.altura}
};

console.log(quadrado.calculaArea());


const agenda = {
    contatos : [
        {nome : 'Yasmin Martins', Telefone : '2199852141', Email : 'Yasmartins0@gmail.com'},
        {nome : 'Leonardo Ferreira', Telefone : '219254857', Email : 'LeoF05@gmail.com'},
        {nome : 'Aline Vieira', Telefone : '995214871', Email : 'Vieiraali0@gmail.com'},
        {nome : 'Julia Diniz', Telefone : '2298541252', Email : 'Dinizjulia@gmail.com'}
    ],
    adicionar : function(contato){this.contatos.push(contato) }
}
console.log(agenda.contatos);

