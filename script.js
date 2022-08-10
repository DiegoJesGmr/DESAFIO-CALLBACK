let Gastoconiva = function(numero){
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
