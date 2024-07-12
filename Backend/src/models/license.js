const mongoose = require('mongoose');
const schema = mongoose.Schema;

const licensescripte = new schema({
    plate: {
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    }
});

const licenseModel = mongoose.model('LicenseModel' , licensescripte);

module.exports = licenseModel;