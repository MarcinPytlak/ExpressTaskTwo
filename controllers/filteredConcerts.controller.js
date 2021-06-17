const Concert = require('../models/concert.model');

exports.getConcertByPerformer = async ( req, res) => {
    try {
        const dep = await Concert.find({ performer : req.params.performer});
        if(!dep) res.status(404).json({ message: ' Performer not found'});
        else res.json(dep);
    }
    catch(err){
        res.status(500).json({ message: err});
    }
};

exports.getConcertByGenre = async ( req, res) => {
    try {
        const dep = await Concert.find({ genre : req.params.genre});
        if(!dep) res.status(404).json({ message: ' Genre not found'});
        else res.json(dep);
    }
    catch(err){
        res.status(500).json({ message: err});
    }
};

exports.getConcertByPrice = async ( req, res) => {
    try {
        const dep = await Concert.find({ price : 
        {
            $gte : req.params.price_min,
            $lte: req.params.price_max
        }});
        if(!dep) res.status(404).json({ message: ' something went wrong with prices'});
        else res.json(dep);
    } catch(err){
        res.status(500).json({ message: err});
    }
};
exports.getConcertByDay = async(req,res) => {
    try {
        const dep = await Concert.find({ day: req.params.day});
        if(!dep) res.status(404).json({ message: ' day not found'});
        else res.json(dep);
    } catch(err){
        res.status(500).json({ message: err});
    }
};
