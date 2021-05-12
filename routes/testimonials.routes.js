const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/testimonials').get((req, res) => {
    let array = db.testimonials;
    res.json({array});
  });

  router.route('/testimonials/random').get((req, res) => {
    const randomValue = db.testimonials[Math.floor(Math.random() * db.testimonials.length)];
    res.json({randomValue});
  });

  router.route('/testimonials/:id').get((req, res) => {
    const id = req.params.id;
    const value = db.testimonials.find(x => x.id == id);
    res.json({value});
  });

  router.route('/testimonials').post((req, res) => {
    let randomId = db.testimonials.length + 1;
    const { author, text } = req.body;
    if(author, text){
         const obj = {
            id: randomId,
            author: req.body.author,
            text: req.body.text,
        }
        db.testimonials[obj]
    }
    res.json({message: "OK!"});
  });

  router.route('/testimonials/:id').put((req, res) => {
    const id = req.params.id;
    const value = db.testimonials.find(x => x.id == id);
    const { author, text } = req.body;
    value.text = text;
    value.author = author;
    res.json({message: "OK!"});
  });

  router.route('/testimonials/:id').delete((req, res) => {
    const id = req.params.id;
    const value = db.testimonials.find(x => x.id == id);
    db.testimonials.splice(value, 1);
    res.json({message: "OK!"});
  });

  module.exports = router;