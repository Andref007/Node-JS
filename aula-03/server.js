const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('content-type', 'text-plain; charset=utf-8')
    res.end('André')
}).listen((port, hostname) => {
    console.log(`Servidor rodando... http://${hostname}:${port}/`)
})


// http.createServer((req, res) => {
//     console.log(req, res);
// }).listen(5000, () => console.log('Servidor funcionando...'))