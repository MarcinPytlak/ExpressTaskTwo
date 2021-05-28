const express = require('express');
const router = express.Router();

const seatController = require('../controllers/seats.controller');

router.get('/seats', seatController.getAll);

router.get('/seats/:id', seatController.getSeatById);

router.post('/seats', seatController.postSeat),

router.put('/seats/:id', seatController.putSeatById);

router.delete('/seats/:id', seatController.deleteSeat);

module.exports = router;