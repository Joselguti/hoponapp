const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/hangoutsController');

//Recibir hangouts
router.post('/hangouts', hangoutsController.postHangouts);


module.exports = router;