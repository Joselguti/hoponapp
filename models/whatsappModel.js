const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Estructura DB SMS Twilio
const whatsappSchema = new Schema({
  SmsSid: {
    type: String,
    required: true,
  },
  ToCity: {
    type: String,
  },
  ToState: {
    type: String,
  },
  ToCountry: {
    type: String,
  },
  SmsStatus: {
    type: String,
  },
  FromCity: {
    type: String,
  },
  FromState: {
    type: String,
  },
  FromCountry: {
    type: String,
  },
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

module.exports = mongoose.model('whatsapp', whatsappSchema);