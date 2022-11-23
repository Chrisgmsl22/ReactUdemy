console.log(`Funciones`)

//Funciones en JS (OLD WAYS)
function saludar(nombre){
    return `Hola ${nombre}`;
}


//Manera recomendada de declarar una función
const sayHI = function(nombre){
    return `Hola, ${nombre}`;
}

//Función flecha / lambda ()=>
const saludarFlecha = (n) => {
    return `Hola ${n}`;
}

const saludarFlecha2 = (n) =>`Hola3 ${n}`;



console.log(saludar('Becky'))
console.log(sayHI('John'));
console.log(`Usando la función flecha: ${saludarFlecha('Nicol')}`);
console.log(saludarFlecha2('Floki'));


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'ChrisGMag22'
    }
}

console.log(getUser());

//Se puede agregar un paréntesis dentro de la declaración de la función para no tener que agregar un return
const getID = () => ({id: 1, username: 'Beny2211'});

console.log(getID());


//1 transformar a función flecha
// 2 retornar un objeto implicito
// 3 tests

const getUsuarioActivoOptimized = (nombre) => ({uid: 'ABC567', username: nombre});

function getUsuarioActivo(nombre){
    return{
        uid: 'ABD456',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');


console.log(usuarioActivo);

console.log(getUsuarioActivoOptimized('mgm76'));