console.log('Async Await');

//async

const getImagenPromise = () => {
    const promise = new Promise((resolve, reject) => {
        resolve('https://www.google.com')
    })

    //Regresamos la promesa
    return promise;
}

//Con la notación async se genera una promesa, la cual debe ser tratada posteriormente
const getImagen = async() => {

    try {
        //return 'https://www.youtube.com';
        const apiKey = '0qOa14YKhx4PfBEKyy3RAV9KHTNgSMx0';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await respuesta.json(); //Json regresa otra promesa
        
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //Manejo del error
        console.error(error);
    }
    

    
};

const getImagen2 = async () => {
    try {
        const apiKey = '0qOa14YKhx4PfBEKyy3RAV9KHTNgSMx0';
        const httpPetition = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await httpPetition.json();

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
        
    }
}

getImagen2();


getImagen();
    

getImagenPromise()
    .then(console.log)
    .catch(console.warn);

    //await nos ayuda a trabajar con el código como si fuera síncrono, nos dice: "espera a que esta promesa termine antes de ejecutar la siguiente linea de código"


    //La única condición para poder trabajar con los awaits, es que se tiene que estar dentro de una función async
