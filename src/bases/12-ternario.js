console.log('Operador Ternario');

const activo = true;

let mensaje = '';

if (activo){
    mensaje = 'Activo';
} else{
    mensaje = 'Inactivo';
}

//Operador ternario
const mensaje2 = (activo) ? 'Activo' : 'Inactivo';
console.log(mensaje2);

const mensaje3 = activo && 'Activo';

//const variable = (condicion) ? cuandoTrue : cuandoFalse
//const variable = condicion && cuandoTrue
// const _ = () => {}