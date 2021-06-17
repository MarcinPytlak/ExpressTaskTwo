const express = require('express');
const router = express.Router();

const concertController = require('../controllers/concerts.controller');
const filteredConcertController = require('../controllers/filteredConcerts.controller');

router.get('/concerts' , concertController.getAll);

router.get('/concerts/:id', concertController.getConcertById);

router.post('/concerts', concertController.postConcert);

router.put('/concerts/:id', concertController.putConcertById);

router.delete('/concerts/:id', concertController.deleteConcert);

router.get('/concerts/performer/:performer', filteredConcertController.getConcertByPerformer);

router.get('/concerts/genre/:genre', filteredConcertController.getConcertByGenre);

router.get('/concerts/price/:price_min/:price_max', filteredConcertController.getConcertByPrice);

router.get('/concerts/price/day/:day', filteredConcertController.getConcertByDay);

module.exports = router;