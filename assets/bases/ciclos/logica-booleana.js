const regresatrue = ()=>{
    console.log('Regresa true')
     return true;
}

const regresafalso = ()=>{
    console.log('Regresa false')
    return false;
}

console.warn('And'); //true si todos los valores son verdaderos
console.log(true && true ) //true

console.log(regresafalso() && regresatrue() );


console.warn('OR');
console.log(true || false)