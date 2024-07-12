const express = require('express');
const app = express();

app.get('/' , (req , res) => {
    res.send('test script');
})









app.listen(3000 , (req , res) => {
    console.log('App has started');
})