/*let Gastoconiva = function(numero){
    let precio = numero *1.21;
    return precio;
}
function operation(og) {
og *1.45;
}
//declaro el array original 
let miarray = [
    {og: 1},
    {og: 2},
    {og: 3},
];
let a_modificado = miarray.map(function(callback){
// llamo al array con map, lo revisa y que retorne 
// un valor modificado, podríamos usar otra funcion para ejecutar una
//operacion matematica

return callback.og * 1.21
});

//listanueva = map(miarray); 
console.log(a_modificado)
*/
// CCORRECCIÓN
function gastoconiva(numero){
 
    return numero * 1.21 ;
}
/*function operation(og) {
og *1.45;
}*/
//declaro el array original 
let miarray = [1,2,3,4];
/*let a_modificado = miarray.map(function(callback){
// llamo al array con map, lo revisa y que retorne 
// un valor modificado

return callback.og * 1.21
});*/

function map(miarray,gastoconiva){
   let a_modificado=[];
   for(let i=0;i<miarray.length;i++){
    let numero=miarray[i];
   
    a_modificado.push(gastoconiva(numero))
      
} 
return a_modificado;
}

//listanueva = map(miarray); 
let nuevalista = map(miarray)
console.log(nuevalista)
