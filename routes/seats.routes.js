const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/seats').get((req, res) => {
    let array = db.seats;
    res.json(array);
  });

  router.route('/seats/random').get((req, res) => {
    const randomValue = db.seats[Math.floor(Math.random() * db.seats.length)];
    res.json(randomValue);
  });

  router.route('/seats/:id').get((req, res) => {
    const id = req.params.id;
    const value = db.seats.find(x => x.id == id);
    res.json(value);
  });

  router.route('/seats').post((req, res) => {
    let randomId = db.seats.length + 1;
    const { id, author, text } = req.body;
    if(author, text && db.seats.some(id)){
         const obj = {
            id: randomId,
            author: req.body.author,
            text: req.body.text,
        }
        db.seats[obj]
    }
    res.json({message: "OK!"});
  });

  router.route('/seats/:id').put((req, res) => {
    const id = req.params.id;
    const value = db.seats.find(x => x.id == id);
    const { author, text } = req.body;
    value.text = text;
    value.author = author;
    res.json({message: "OK!"});
  });

  router.route('/seats/:id').delete((req, res) => {
    const id = req.params.id;
    const value = db.seats.find(x => x.id == id);
    db.seats.splice(value, 1);
    res.json({message: "OK!"});
  });

  module.exports = router;