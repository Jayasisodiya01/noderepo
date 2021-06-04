const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to our first Homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Something went wrong, we cannot find the page you are looking for.</p>
    <a href='/'>Back Home</a>
    `)
})

server.listen(5001)