const js=require('json-server');
const server = js.create();
const mid = js.defaults();
const router = js.router('db.json');
const port = 5000;

server.use(mid);
server.use(router);
server.listen(port, () => {
    console.log('server listen on', port)
})