const express = require('express');
const router = express.Router();

router.get('/licences' , (req, res) => {
    res.render('licences');
});

router.post('/set' , (req , res) => {
    
});

module.exports = router;