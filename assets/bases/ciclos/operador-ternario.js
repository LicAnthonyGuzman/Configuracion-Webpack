const dia = 4;
const HoraActual = 10;
//Estas son la Variables
let horaApertura;
let mensaje;

if(dia === 0 || dia === 6){
    console.log('Es fin de semana')
    horaApertura = 9;
}
else{
    console.log('Dia de Semana')
    horaApertura = 11;
}
    

if(HoraActual >= horaApertura){
    mensaje = 'Esta abierto';
}
else{
    mensaje = `Esta cerrado,hoy abrimos a las ${horaApertura}`;
} 

console.log(horaApertura,mensaje);