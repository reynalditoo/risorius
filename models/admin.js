const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const MsgSchema = mongoose.Schema({
  message: {
    type: String
  }
});

// Pour rendre AlertMsg utilisable ailleurs
const AlertMsg = module.exports = mongoose.model('AlertMsg', MsgSchema);

module.exports.storeAlertMsg = function(newAlertMsg, callback){
  newAlertMsg.save(callback);
};

/*module.exports.getAlertMsg = function(callback){
  AlertMsg.findOne({'message': 'antoine'}, callback);
}*/