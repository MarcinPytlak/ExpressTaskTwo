const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    id : { type: Number, required: true},
    author : { type: String, required: true},
    text: {type: String, required: false},
});

module.exports = mongoose.model('Testimonial', testimonialSchema);