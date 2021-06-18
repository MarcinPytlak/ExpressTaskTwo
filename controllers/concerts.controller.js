const Concert = require('../models/concert.model');
const sanitize = require('mongo-sanitize');

exports.getAll = async (req, res) => {
    try {
      res.json(await Concert.find());
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  };

exports.getConcertById = async (req,res) => {
    try {
        const dep = await Concert.findById(req.params.id);
        if(!dep) res.status(404).json({ message: 'Not found' });
        else res.json(dep);
    }
    catch(err) {
        res.status(500).json({ message: err });
      }
};

exports.postConcert = async (req, res) => {
    try {
        const id = sanitize(req.body.id);
        const performer = sanitize(req.body.performer);
        const genre = sanitize(req.body.genre);
        const price = sanitize(req.body.price);
        const day = sanitize(req.body.day);
        const image = sanitize(req.body.image);
        const newConcert = new Concert({ id: id, performer: performer, genre: genre, price: price, day: day, image: image});
        await newConcert.save();
        res.json( await Concert.find());
    }
    catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.putConcertById = async(req,res) => {
    const { id, performer, genre, price, day, image} = req.body;
    try {
        await Concert.updateOne({ _id: req.params.id}, {$set : {id: id, performer: performer, genre: genre, price: price, day: day, image: image}})
        res.json( await Concert.find());
    }
    catch(err) {
        res.status(500).json({ message: err });
      }
};

exports.deleteConcert = async(req,res) => {
    try {
        const dep = await ( Concert.findById(req.params.id));
        if(dep) {
            await Concert.deleteOne({ _id: req.params.id});
            res.json( await Concert.find());
        }
        else res.status(404).json({ message: 'Not found...' });
    }
    catch(err) {
        res.status(500).json({ message: err });
      }
};
