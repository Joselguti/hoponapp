const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Estructura DB SMS Twilio
const hangoutsSchema = new Schema({
  Body: {
    type: String,
  },
  From: {
    type: String,
  },
  To: {
    type: String,
  },
});

module.exports = mongoose.model('hangouts', hangoutsSchema);