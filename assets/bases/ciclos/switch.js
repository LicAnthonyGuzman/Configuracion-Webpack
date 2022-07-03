//Ejercicio de los Switch//

const dia =9;

switch(dia){
    case 0:
    console.log('Domingo');
    break
    case 1:
        console.log('Lunes');
    case 2:
     console.log('Martes');
    case 3:
        console.log('Miercoles');
        break
    case 4:
        console.log('Jueves');
        break
    case 5:
        console.log('Viernes');
        break
    case 6:
        console.log('Sabado');
        break
        default:
            console.log('No es lunes,martes o  domingo')
}