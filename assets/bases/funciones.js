function saludar(nombre){
    console.log('Hola' + nombre )
    console.log(arguments)
};


const SaludarFlecha = () =>{
    console.log('Hola Mundo')
}

saludar( 'Anthony', 40,true,'RD' );
SaludarFlecha();

function Sumar(a,b){
return(a+b)
};

const sumar =  (a,b) =>{
    return a+b
}

console.log(Sumar(20,20));
console.log(sumar(25,25));

function getAleatorio() {
    return Math.random();
}

// En una función de flecha, que no tenga llaves { }
// getAleatorio2()
const getAleatorio2 = () => Math.random();


console.log(  getAleatorio2()   );
