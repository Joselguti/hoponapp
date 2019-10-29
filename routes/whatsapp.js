/*
Aqui se estableceran las rutas hacia las paginas para los usuarios
*/
const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/whatsappController');

//Recibir Whatsapp de Twilio
router.post('/whatsapp', whatsappController.postWhatsapp);


module.exports = router;