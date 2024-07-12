const express = require('express');
const router = express.Router();
const { licenseModel } = require('../models');

// /licences/?month:number&day:number&hour:number&minute:number
router.get('/licencesx' , async (req , res) => {
    let query = {};

        // Query parametrelerini al
    const { month, day, hour, minute } = req.query;
    // Eğer parametreler gönderildiyse, filtreleme objesini oluştur
    if (month) query.month = Number(month);
    if (day) query.day = Number(day);
    if (hour) query.hour = Number(hour);
    if (minute) query.minute = Number(minute);
    // licenseModel üzerinde sorgu yap
    const licenses = await licenseModel.find(query);
    res.send('hello world')
})



module.exports = router;