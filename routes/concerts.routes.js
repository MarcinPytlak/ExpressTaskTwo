const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/concerts').get((req, res) => {
    let array = db.concerts;
    res.json(array);
  });

  router.route('/concerts/random').get((req, res) => {
    const randomValue = db.concerts[Math.floor(Math.random() * db.concerts.length)];
    res.json(randomValue);
  });

  router.route('/concerts/:id').get((req, res) => {
    const id = req.params.id;
    const value = db.concerts.find(x => x.id == id);
    res.json(value);
  });

  router.route('/concerts').post((req, res) => {
    let randomId = db.concerts.length + 1;
    const { author, text } = req.body;
    if(author, text){
         const obj = {
            id: randomId,
            author: req.body.author,
            text: req.body.text,
        }
        db.concerts[obj]
    }
    res.json({message: "OK!"});
  });

  router.route('/concerts/:id').put((req, res) => {
    const id = req.params.id;
    const value = db.concerts.find(x => x.id == id);
    const { author, text } = req.body;
    value.text = text;
    value.author = author;
    res.json({message: "OK!"});
  });

  router.route('/concerts/:id').delete((req, res) => {
    const id = req.params.id;
    const value = db.concerts.find(x => x.id == id);
    db.concerts.splice(value, 1);
    res.json({message: "OK!"});
  });

  module.exports = router;