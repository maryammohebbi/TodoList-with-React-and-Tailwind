// api/db.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json'); // Adjust the path to your JSON database file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
