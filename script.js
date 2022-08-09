let Gastoconiva = function(numero){
    let precio = numero *1.21;
    return precio;
}
//declaro el array inicial;
let miarray = [1,2,3,4];
function map(miarray,callback){
    // creo uno auxiliar para pasar los datos y q este sea el retorno.
    let listamodificada = [];
    //Lista modificada == la lista original + el valor 
    //original con la operacion realizada
    
    for(let i=0;i<miarray.length;i++){
        //pasar = el numero q hay q pasar a la funcion 
        //para q se le haga la operacion correspondiente
       let aux = miarray[i];

        function callback(aux){
            //aux ingresa como parámetro y creamos una 
            //variable para la operaciond eseada
            let calculo = aux * 1.21;
                
            return calculo;
        }
        //pusheamos los datos dentro del array auxiliar y dentro 
        //de los datos llamamos a la funcion para crear
        //La matriz
        listamodificada.push({
        Numero_original: aux,
        Numero_Modificado: callback(aux) 
        }); 
    }
    //Hacemos q la funcion retorne el array creado.
    return listamodificada;
}
listanueva = map(miarray); 
console.log(listanueva)