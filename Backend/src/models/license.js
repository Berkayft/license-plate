const mongoose = require('mongoose');
const schema = mongoose.Schema;

const licensescripte = new schema({
    plate: {
        type:String,
        required:true,
    },
    month:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    hour:{
        type:String,
        required:true
    },
    minute:{
        type:String,
        required:true
    }
});

const licenseModel = mongoose.model('LicenseModel' , licensescripte);

module.exports = licenseModel;