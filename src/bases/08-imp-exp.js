//import { heroes} from './data/heroes';
//import {heroes} from './data/heroes';


//Essta es la importación que viene por defecto
import  heroes, { owners }  from "../data/heroes";
//y despues de la coma, vienen las constantes que queremos usar

console.table(heroes);

export const getHeroeById = (id) => {
    return heroes.find((element) => element.id === id)
    
}

/**
 * Se recomienda englobar los argumentos de la función callback dentro de paréntesis (), incluso si es únicamente 1 
 */

console.log(getHeroeById(2));

/**
 * Para hacer uso de otro archivo con un contenido
 * no solo basta con importarlo en el archivo origen, sino que se tiene que EXPORTAR dentro del archivo que contiene la información
 * 
 * 
 * find: arr.find(callback(element[, index[, array]])[, thisArg]), regresa solo un elemento
 * 
 * si se tienen más elementos, entonces se usa el método filter, el cual regresa un arreglo entero
 */

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

console.log(getHeroesByOwner('DC'));

// coleccion.filter((variable) => condicion)
// retorna un arreglo...

console.table(owners)




