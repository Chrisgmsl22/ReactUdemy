//Arreglos 
//const arreglo = new Array(100); //Tiene 100 posiones vacías

const arreglo = [];

arreglo.push(1); 
arreglo.push(2); 
arreglo.push(3); 
arreglo.push(4);

console.log(arreglo);
console.log(`Text`);

let arreglo2 = [...arreglo, 5];


//Método map
//Callback es una función que se ejecuta dentro de otro método, dentro de un map, se esfribe una function()
const arreglo3 = arreglo2.map(function(numero){
    //Dentro, necesitamos colocarle un return explícito
    return numero * 2
});

arreglo2.push(5);
console.log(arreglo2);
console.log(arreglo3)

/**
 * 
 * No se recomienda usar push, ya que push modifica el objeto principal, se recomineda usar el operador spread
 */


/**
 * El operador spread (...) nos sirve para sacar la copia de una variable (en especial de un tipo de colección), pero meramente extrae el contenido de una variable de colección para poder ser manipulada
 */