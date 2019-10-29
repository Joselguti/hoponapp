const Whatsapp = require('../models/whatsappModel');
const nodemailer = require('nodemailer');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

exports.postWhatsapp = (req, res, next) => {
	//Instancia de mensajeria
	const twiml = new MessagingResponse();

	//Guardar en variables la informacion recibida
	const Body = req.body.Body;
  const From = req.body.From;
	const To = req.body.To;
	
	//Crear instancia del modelo
	const whatsapp = new Whatsapp({
    Body: Body,
    From: From,
    To: To,
	});
	//GUARDAR INFO
	whatsapp.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
	});
	
	//EMAIL
	let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'grupo5.progrmacion.profesional@gmail.com',
      pass: 'SOS_grupo5'
    }
  });
  let mailOptions = {
    from: 'grupo5.progrmacion.profesional@gmail.com',
    to: 'izenteno22@gmail.com',
    subject: 'Notificación de petición de auxilio.',
    text: 'Se ha recibido una petición de auxilio de: ' + From + ' con la siguiente información: ' + Body
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email Enviado !!!!');
    }
	});
	//Enviar mensaje
	twiml.message('Gracias por utilizar el servicio de emergencias de whatsapp, se ha recibido su informacion y se ha informado a carabineros para que una patrulla vaya a su ubicación.');
	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
};