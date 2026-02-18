import express from 'express';
// import http from 'http';


const app = express(); // new instance of express application
const port = 3000;

// const server = http.createServer((req,res) =>{
//     res.writeHead(200, {'Content-type':'text/plain'});
//     res.end('Server is set up');
// });

// server.listen(3000, () => {console.log("Listening to 3000")});

app.get('/', (req,res) =>{
    res.send('Hello There');
});

app.listen(port , () => {console.log(`Listening to http://localhost:${port}`)});