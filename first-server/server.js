const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write("<h1>BHienvenid@ al inciio</h1>")
        res.end()
    } else if (req.url === '/productos') {
        res.write("<h1>Estos son los productazos GASTA JODER</h1>")
        res.end()
    } else if (req.url === '/contacto') {
        res.write("<h1>¿Hbalamos?</h1>")
        res.end()
    } else {
        res.statusCode = 404
        res.write('<h1>la página no existe, mer-lu-zo</h1>')
        res.end()
    }
})

server.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'))