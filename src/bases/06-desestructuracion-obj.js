console.log('Desestructuración de objetos');

//Igualmente llamado como asignación desestructurante

//Primero creamos un diccionario
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 55,
    clave: 'IronMan',
    rango: 'Capitán'
}

//Desesctructurazión
const {nombre, edad, clave} = persona; //Extrae, lo que yo estoy poniendo dentro de estas letras, de este objeto (en este caso es persona)

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);

console.log(nombre);
console.log(edad);
console.log(clave);

const retorarPersona = (persona) => {
    const {nombre, apellido} = persona;
    
    //Mandamos a consola 
    console.log(nombre);
    console.log(apellido);
}


//Puedo desestructurizar una colección desde la llegada de parámetros de una función
const useContext = ({nombre, apellido, rango = 'Coronel'}) => {
    
    //console.log(`${nombre} ${apellido}`);
    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 144.55,
            lng: 11.22
        }
    }
}

//Para extraer el contenido dentro de un contenido ya extraido
const {nombreClave, anios, lating} = useContext(persona);
const {lat, lng} = lating;
console.log(nombreClave, anios);
console.log(lat, lng)




//Si existe una propiedad en la declaración, entonces usa esa, si no usa la que viene de forma temporal dentro de la declaración

retorarPersona(persona);
useContext(persona)


/**
 * En react se usa más const que let
 */