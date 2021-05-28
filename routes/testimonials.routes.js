const express = require('express');
const router = express.Router();

const testimonialController = require('../controllers/testimonials.controller');

router.get('/testimonials' , testimonialController.getAll);

router.get('/testimonials/random', testimonialController.getRandom);

router.get('/testimonials/:id', testimonialController.getTestById);

router.post('/testimonials', testimonialController.postTest);

router.put('/testimonials/:id', testimonialController.putTestById);

router.delete('/testimonials/:id', testimonialController.deleteTest);

module.exports = router;