const express = require('express');
const router = express.Router();
const hangoutsController = require('../controllers/hangoutsController');

//Recibir hangouts
router.post('/hangouts', hangoutsController.postHangouts);


module.exports = router;