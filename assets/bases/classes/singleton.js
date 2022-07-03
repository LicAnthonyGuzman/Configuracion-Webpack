

class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre=''){
      
            if(!!Singleton.instancia){
                return Singleton.instancia;
            }

        Singleton.instancia = this;
        this.nombre = nombre;

     
    }

}

const intancia1 =new Singleton('Iron Man')
console.log(`Nombre en la instancia es:${intancia1.nombre}`)