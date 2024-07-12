const mongoose = require('mongoose');
const licenseModel = require('./license');
require('dotenv').config();


async function DBconnect() {
    try {
        await mongoose.connect(process.env.DBURI);
    } catch (err){
        console.log(err);
    }
}

DBconnect();

module.exports = {
    licenseModel
}