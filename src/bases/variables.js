//Este será nuestro index
const nombre = 'Julio';
const apellido = 'Patán';

const nombreCompleto = `${nombre} ${apellido}`;

//Lo mandamos a consola dentro del navegador
console.log(nombreCompleto);

function getSaludo(){
    return `Hola
        ${nombreCompleto}
    `;
}

console.log(getSaludo())