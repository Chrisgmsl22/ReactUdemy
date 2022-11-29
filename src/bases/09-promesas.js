import {getHeroeById} from '../src/bases/08-imp-exp'

console.log(`Promesas`);

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//          //Tarea
//          //importar getHeroeById
//          const heroe = getHeroeById(2);
//          console.log(heroe);

//          resolve(heroe);
//     }, 2000); //Ejecuta una tarea en cierto tiempo
// }); //estas vienen en un lugar especial,  después del codigo asíncrono



// promesa.then((heroe) => {
//     console.log(`Heroe: ${heroe}`);
// }).catch(err => console.warn(err));


//Creamos una función flecha
const getHeroeByIdAsync = (id) => {
    //Creamos una promesa
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            //Dentro de nuestro timeout
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
            //.log(p1);
            
        }, 2000 );
    })

    return promesa; //Debemos retornar la promesa
};


console.log('usando la func aysnc');

//LLamamos a la función
getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn); //Simplificamos las lineas


//const _ = () => {} 



//Las promesas, reciben como argumento una función callback ()=>{}, la convención de resolver y rechazar, se deben escribir dos argumentos con ese nombre


//Sincrono: que se ejecutan las tareas unas después de la otra

//Asíncrono: aquellas tareas que tienen que esperar a que ocurra un determinado suceso