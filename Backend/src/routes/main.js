const express = require('express');
const router = express.Router();
const { licenseModel } = require('../models');
const Joi = require('joi');
require('dotenv').config();


const SecretKey = process.env.SECRETKEY;

function inputValidator(req, res, next) {
    const { body } = req;
    console.log(body);
    // Joi ile schema tanımlaması
    const schema = Joi.array().items(
        Joi.object({
            plate: Joi.string().pattern(/^[0-9]{2} [A-Z]{2} [0-9]{4}$/).required(),
            date: Joi.string().pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}\/[0-9]{2}:[0-9]{2}$/).required()
        })
    );

    // Veri doğrulaması
    const { error } = schema.validate(body);

    if (error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next(); // Veri doğrulaması başarılıysa bir sonraki middleware'e geçiş yapar
    }
}


function aiValidator(req, res, next) {
    const secretKeyHeader = req.headers['secretkey']; // Header'daki SecretKey'i alır

    if (secretKeyHeader && secretKeyHeader === SecretKey) {
        console.log('come to daddy');
        next(); // SecretKey doğruysa bir sonraki middleware'e geçiş yapar
    } else {
        console.log('accsess denied');
        res.status(403).send('Forbidden: Invalid or missing SecretKey'); // SecretKey yoksa veya yanlışsa hata mesajı döner
    }
}





router.post('/set' ,aiValidator, async (req , res) => {
    try {
        const licenses = req.body;
        console.log(licenses);

        // Validate each license against the schema

        // If validation passes, insert into database
        for (const license of licenses) {
            // Assuming `License` is your Sequelize model
            await licenseModel.create({
                plate: license.plate,
                date: license.date
            });
        }

        res.status(201).send('Lisanslar başarıyla eklendi.');
    } catch (error) {
        // Joi validation error handling
        if (error.isJoi) {
            res.status(400).send('Doğrulama hatası: ' + error.message);
        } else {
            res.status(500).send('Bir hata oluştu: ' + error.message);
        }
    }
});

router.get('/licences' , async (req, res) => {
    const licences = await licenseModel.find();
    res.render('licences' , {Licences:licences});
});

module.exports = router;