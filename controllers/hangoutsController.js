const nodemailer = require('nodemailer');
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const Hangouts = require('../models/hangoutsModel');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emergencysms-73be8.firebaseio.com"
});

const db = admin.firestore();

exports.postHangouts = (req, res, next) => {
	let text = '';
  // Case 1: When BOT was added to the ROOM
  if (req.body.type === 'ADDED_TO_SPACE' && req.body.space.type === 'ROOM') {
    text = `Thanks for adding me to ${req.body.space.displayName}`;
  // Case 2: When BOT was added to a DM
  } else if (req.body.type === 'ADDED_TO_SPACE' &&
      req.body.space.type === 'DM') {
    text = `Thanks for adding me to a DM, ${req.body.user.displayName}`;
  // Case 3: Texting the BOT
  } else if (req.body.type === 'MESSAGE') {
    text = `Your message : ${req.body.message.text}`;
  }
  return res.json({text});
};