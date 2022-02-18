class Quadrado {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura
    }
}
 const quadrado = new Quadrado(10, 20);
 console.log(quadrado.calcularArea());
