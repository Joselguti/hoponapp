const SmsTwilio = require('../models/smsTwilioModel');
const Whatsapp = require('../models/whatsappModel');

exports.getDashboard = (req, res, next) => {
  //Recibe SMS de twilio
  SmsTwilio.find()
  .then(sms => {
    Whatsapp.find()
    .then(whatsapp => {
      res.render('dashboard', {
        path: '/dashboard',
        pageTitle: 'Dashboard',
        isAuthenticated: req.session.isLoggedIn,
        whatsapp: whatsapp,
        sms: sms
      });
    })
    .catch(err => {
      console.log(err);
      res.send('Ha ocurrido un error con los mensajes de whatsapp');
    });
  })
  .catch(err => {
    console.log(err);
      res.send('Ha ocurrido un error con los mensajes de SMS');
  });
};
