import express from 'express';
// import http from 'http';


const app = express(); // new instance of express application
const port = 3000;

const router = express.Router();
// const server = http.createServer((req,res) =>{
//     res.writeHead(200, {'Content-type':'text/plain'});
//     res.end('Server is set up');
// });

// server.listen(3000, () => {console.log("Listening to 3000")});

app.get('/', (req,res) =>{
    res.send('Hello There');
});

// to read json data
app.use(express.json());

// app.get('/api/v1/cars', (req,res) =>{
//     res.send('Hello There');
// });

// app.get('/api/v1/cars', (req,res) =>{
//     res.send('Hello There');
// });
// app.post('/api/v1/cars', (req,res) =>{
//     res.send('Hello There');
// });
// app.put('/api/v1/cars', (req,res) =>{
//     res.send('Hello There');
// });

router.get('/cars', (req,res) =>{
    res.send('Hello There');
});

router.get('/cars', (req,res) =>{
    res.send('Hello There');
});
router.post('/cars', (req,res) =>{
    res.send('Hello There');
});
router.put('/cars', (req,res) =>{
    res.send('Hello There');
});

app.use('/api/v1/', router);


app.listen(port , () => {console.log(`Listening to http://localhost:${port}`)});