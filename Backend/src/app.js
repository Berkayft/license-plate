const express = require('express');
const app = express();
const mainRouter = require('./routes/main');

app.set('views' , 'views');

app.get('/' , (req , res) => {
    res.send('test script');
})

app.use('/' , mainRouter);

app.listen(3000 , (req , res) => {
    console.log('App has started');
})