

const carros = ['Ford','Mazda','Toyota','Chevrolet']


console.warn('While')
let i =0;
while(i < carros.length){
    console.log(  carros[i] );
    i++;
}
// sI Dice Undefined o Null significa que la Condicion es Falsa

console.warn('Do while');
let j =0;
do{

    console.log(carros[j]);
    j++;
}while(carros[j]);