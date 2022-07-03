
let a = 5;

if (a > 10){
    console.log('A es mayor o igual  a 10.');
}
else{

        console.log('A es menor que 10')
    
}
     
//console.log('Fin del Programa.');

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDay();

console.log(dia);

if (dia === 0 )
{
    console.log('Domingo');
}
else
{
    console.log('No es Domingo')
}

const nombreDelDiaSegunFecha = fecha => {
    return [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ][new Date(fecha).getDay()];
  }

  console.log(nombreDelDiaSegunFecha);