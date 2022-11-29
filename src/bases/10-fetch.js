console.log('Fetch API');

//Primero necesitamos un api key, es decir, una llave
const apiKey = '0qOa14YKhx4PfBEKyy3RAV9KHTNgSMx0';

//Cómo usar el fecth API

//Creamos una petición, haciendo fetch a una API
const httpPeticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //Pasamos parámetros

//La función fetch regresa una  promesa, por lo que para tratar con las promesas, usamos los métodos then

//LAs promesas pueden encadenarse
// httpPeticion.then(respuesta => {
//     //.json resuelve una promesa
//     respuesta.json().then(data => {
//         console.log(data);
//     })
//     //console.log(respuesta);
// })

//Forma optimizada (promesas en cadena)
httpPeticion
    .then(resp => resp.json())
    .then(({data}) => {
        //Desestructurizamos el contenido de la imagen (url)
        const {url} = data.images.original
        
        //Creamos la imagen
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        
    })
    .catch(console.warn); //Fin de la petición