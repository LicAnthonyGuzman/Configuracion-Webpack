class Persona{
    static _conteo =0;
    static get conteo(){
        return Persona._conteo + "instancia"
    }
 
    static mensaje(){
        console.log(this.nombre)
        console.log('Hola a todos')
    }
     
     nombre='Anthony';
     codigo='015Ac';
     frase='Me pica el factorial';
     comida=''
     constructor(nombre= 'Anthony',codigo='A3445',frase='KLK'){
         console.log('Hola!')
         this.nombre = nombre
         this.codigo = codigo
         this.frase = frase
 
 
         Persona._conteo++;
     }
 
 
     set setComidaFavorita(comida ){
             this.comida = comida;
     }
 
     get getComidaFavorita(){
         return `La comida favorita de ${this.nombre}es ${this.comida}`;
     }
 
 
     quienSoy(){
     console.log(`Soy ${this.nombre}y mi identidad es ${this.codigo}`);
     }
 
     miFrase(){
         console.log(`${this.codigo} dice: ${this.frase}`)
     }
 }
            class Heroe extends Persona{
               
                clan = 'Sin Clan';

                constructor(nombre,codigo,frase){
                    
                    super(nombre,codigo,frase);
                    this.clan = 'Los Avengers'
                }
            }



        const SpiderMan = new Heroe('Peter Parker', "Spider", 'Soy tu amigable venico Spidey')
        //const SpiderMan = new Heroe()

        console.log(SpiderMan)
        SpiderMan.quienSoy();





