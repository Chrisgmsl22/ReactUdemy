//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//Desestructuración de arreglos
const [Gk, v, t ] = personajes;

console.log(Gk, v ,t);

//Creamos una función flecha
const retornarArreglo = () => {
    return ['ABC', 123]; //Así se retorna un arreglo mixto
}

const [letra, numero] = retornarArreglo(); 

console.log(letra, numero);

//Tarea 
//1. el primer valor del arreglo se llamará nombre
//2. se llamará setNombre 
const usarEstate = (valor) => {
    return [valor, ()=>{console.log('HM usando:', valor)}];
}

const [nombre, setNombre] = usarEstate('GK');
console.log(nombre);
setNombre();

//Ejercicio propio
const usarEjemplo = (param) => {
    return [param, ()=>{console.log(`Segundo: ${param}`)}];
    
}

//Para desestructurizar un arreglo:
const [param1, param2] = usarEjemplo('arg');

console.log(param1);
console.log(param2);
