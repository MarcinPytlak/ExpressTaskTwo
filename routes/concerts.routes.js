const express = require('express');
const router = express.Router();
let db = require('../db');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
    res.json(db.concerts[req.params.id]);
});

router.route('/concerts').post((req, res) => {
    const concert = {
        id: (db.concerts.length + 1),
        performer: req.body.performer,
        genre: req.body.genre,
        price: req.body.price,
        day: req.body.day,
        image: req.body.image,
    }
    db.concerts.push(concert);
    return res.json({
        message: 'ok'
    });
});

router.route('/concerts/:id').put((req, res) => {
    db.concerts.forEach(concert => {
        if(concert.id == req.params.id) {
            concert.performer = req.body.performer;
            concert.genre = req.body.genre;
            concert.price = req.body.price;
            concert.day = req.body.day;
            concert.image = req.body.image;
        }
    });
    return res.json({
        message: 'ok'
    });
});

router.route('/concerts/:id').delete((req, res) => {
    db.concerts.forEach(concert => {
        if(concert.id == req.params.id) {
            const index = db.concerts.indexOf(concert);
            db.concerts.splice(index, 1);
        }
    });
    return res.json({
        message: 'ok'
    });
});

module.exports = router;