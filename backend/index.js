/******server setup*******/
const http = require('http');
const app = require('./app');

const headerFix = (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
}

// and host the server with specific PORT
const port = process.env.PORT || 4000;
const server= http.createServer(app);
server.listen(port);