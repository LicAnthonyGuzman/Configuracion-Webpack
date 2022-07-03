class Rectangulo {
    #area = 0

    constructor(base = 0 , altura ){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura
    }
}

const rectangulo = new Rectangulo(10,15)

console.log(rectangulo)