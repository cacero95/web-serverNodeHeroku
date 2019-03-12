const express = require('express');
const app = express();
const hbs = require('hbs');


require('./hbs/helpers');
//require('./hbs/helpers'); con esta linea indoco que se ejecute todo lo que hay en ese file

/**
 * Cuando se este ejecutando la apicacion de manera remota
 * el servidor debe habilitar variables globales
 */

const puerto = process.env.PORT || 3000; // variable global jajaj esta || es como un o en un if


// express permite crear un middleware donde podemos filtrar las peticiones
// middleware = funciona para tratar todas las peticiones que se hagan en el servidor
// sin importar que
// __dirname con este indicamos que tome elpath donde se encuentre
app.use(express.static(__dirname + '/public')); // aca se creo el middleware
// Express hbs engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// helpers: Son funciones que se invocan cuando el template lo necesita


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'andres',
    });

});
app.get('/about', (req, res) => {

    res.render('about')

});
//app.get('/', (req, res) => { // pero aqui si trato las peticiones que vayan con /
//    let salida = {
//        nombre: 'Carlos Andres Acero',
//        edad: 24,
//        url: req.url
//    }
//    res.send(salida); // aqui el api de express reconoce que le mando un json
//});

//app.get('/data', (req, res) => { // ahora voy tratar las peticiones con /data
//
//    res.send('hola data');
//});
// pero app.list tambien recive un callback
app.listen(puerto, () => {
    console.log(`estoy escuchando por el port ${puerto}`);
});