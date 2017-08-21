var mongoose = require( 'mongoose' );

var patientSchema = mongoose.Schema({
    date : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    disease : {
        type : String,
        required : true
    },
    medication : {
        type : String,
        required : true
    },
    cost : {
        type : String,
        required : true
    },
});

var patientList = module.exports = mongoose.model('patientdatas',patientSchema);

module.exports.getPatients = function(callback){
    patientList.find(callback)
}
module.exports.addPatient = function(patient,callback){
    patientList.create(patient,callback)
}

module.exports.removePatient = function(id,callback){
    var query = {_id:id}
    patientList.remove(query,callback)
}