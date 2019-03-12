const http = require('http');
// pero para hacer peticiones http primero hay que crear el servidor

http.createServer((req, res) => {
        // responde un callback
        // cuando se pone el 200 siginifica que el request success
        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'Carlos Andres Acero',
            edad: 24,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);
console.log('escuchando el puerto 8080');