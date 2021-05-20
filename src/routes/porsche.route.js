const express = require('express');

const router = express.Router();
const controller = require('../controllers/porsche.controller');

router
    .get('/', controller.getPosition)
    .post('/create', controller.addPosition)
    .put('/update', controller.updatePosition)
    
module.exports = router;