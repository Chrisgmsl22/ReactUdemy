const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Estas son las exportaciones individuales
export const owners = ['DC', 'Marvel'];

export default heroes; // esta es la exportación por defecto

/**
 * Si queremos exportar más de una colección del archivo de colecciones, no se debe colocar dentro del mismo export, sino que se desestructuriza a modo de seleccionar aquella información requerida
 */

//Un solo export
// export {
//     heroes as default, 
//     owners
// }