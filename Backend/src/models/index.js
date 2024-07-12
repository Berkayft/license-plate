const mongoose = require('mongoose');
const license = require('./license');
require('.dotenv').config();


async function DBconnect() {
    try {
        await mongoose.connect(process.env.DBRUI);
    } catch (err){
        console.log(err);
    }
}

DBconnect();

module.exports = {
    license
}