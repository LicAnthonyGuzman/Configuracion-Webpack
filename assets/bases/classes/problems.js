

function Persona(nombre,edad){
    console.log('Se ejecuto esta linea')
    this.nombre = nombre;
    this.edad = edad;
}

const Maria = new Persona('Maria',23);
console.log(Maria);