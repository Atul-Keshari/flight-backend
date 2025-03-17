const express = require('express');

const {AirplaneController} = require('../../controllers')
const {AirplaneMidlewares} = require('../../middlewares')

const router = express.Router();

router.post('/',AirplaneMidlewares.validateCreateRequest, AirplaneController.createAirplane);
router.get('/', AirplaneController.getAirplanes);

module.exports = router;   