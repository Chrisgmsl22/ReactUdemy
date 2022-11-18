//Objetos literales
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 55,
    direccion: {
        calle: 'Manzanillo',
        colonia: 'San pedro',
        CP: 8865
    }
};

const persona2 = {...persona}; //creamos un clon de la persona con su respectiva direccion de memoria

console.log(persona);
console.table(persona);

console.log(persona2)

/*
    Los objetos literales, se conocen igualmente como diccionarios
*/


/*
    Para clonar un objeto, en este caso tratándose de un diccionario, no es necesario agregar y copy-paste toda la declaración del diccionario anterior

    la sintaxis es:
        const nombreVarClonada = {...nombreVarOriginal}
*/
