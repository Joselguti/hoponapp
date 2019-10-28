const whatsapp = require('../models/whatsappModel');
const nodemailer = require('nodemailer');


// TRIAL NUMBER +56937610313
// ACCOUNT SID AC7d1719dc458b4b249c1afdbc909e0bed
// AUTH TOKEN 9c5382faa212214d8ae5b1077f7c44a6
// https://bots.dialogflow.com/twilio/c0177964-d5dc-47b9-ad5d-d6156f166081/sms

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

exports.postTwilioSMS = (req, res, next) => {
	const accountSid = 'AC7d1719dc458b4b249c1afdbc909e0bed';
	const authToken = 'your_auth_token';
	const client = require('twilio')(accountSid, authToken);
	
	client.messages
	.create({
		from: 'whatsapp:+14155238886',
		body: 'Hello, there!',
		to: 'whatsapp:+15005550006'
	})
	.then(message => console.log(message.sid));
	
	
};
/* 1 WAY MSG
curl 'https://api.twilio.com/2010-04-01/Accounts/AC7d1719dc458b4b249c1afdbc909e0bed/Messages.json' -X POST \
--data-urlencode 'To=whatsapp:+56991291640' \
--data-urlencode 'From=whatsapp:+14155238886' \
--data-urlencode 'Body=Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/' \
-u AC7d1719dc458b4b249c1afdbc909e0bed:9c5382faa212214d8ae5b1077f7c44a6
*/

/* RESPONSE
curl 'https://api.twilio.com/2010-04-01/Accounts/AC7d1719dc458b4b249c1afdbc909e0bed/Messages.json' -X POST \
--data-urlencode 'To=whatsapp:+56991291640' \
--data-urlencode 'From=whatsapp:+14155238886' \
--data-urlencode 'Body=Hello! This is an editable text message. You are free to change it and write whatever you like.' \
-u AC7d1719dc458b4b249c1afdbc909e0bed:9c5382faa212214d8ae5b1077f7c44a6
*/