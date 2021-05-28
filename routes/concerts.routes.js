const express = require('express');
const router = express.Router();

const concertController = require('../controllers/concerts.controller')

router.get('/concerts' , concertController.getAll);

router.get('/concerts/:id', concertController.getConcertById);

router.post('/concerts', concertController.postConcert);

router.put('/concerts/:id', concertController.putConcertById);

router.delete('/concerts/:id', concertController.deleteConcert);

module.exports = router;