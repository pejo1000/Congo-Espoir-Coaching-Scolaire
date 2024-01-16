import {createServer} from 'node:http'

const server = createServer((req, res)=>{
    res.write('hello')
res.end()
})

server.listen('8080')