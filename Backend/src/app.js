const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main');
const cors = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.use(express.json()); // JSON verileri için middleware
app.use(express.urlencoded({ extended: true })); 

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5000'], // İzin verilen origin
    methods: ['GET', 'POST'], // Desteklenen HTTP metodları
    allowedHeaders: ['Content-Type', 'Authorization'], // İzin verilen başlıklar
};

app.use(cors(corsOptions));


app.get('/' , (req , res) => {
    res.render('index')
})

app.use('/' , mainRouter);



app.listen(3000 , (req , res) => {
    console.log('App has started');
})