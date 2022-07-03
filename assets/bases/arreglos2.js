let juegos = ["Zelda","metroid", "God of war"];
console.log('Largo:',juegos.length)

juegos.forEach( (elemento,indice,arr)=>{
    console.log(elemento,indice,arr)
});

let NuevoLongitud = juegos.push('F-zero')
console.log(NuevoLongitud)
