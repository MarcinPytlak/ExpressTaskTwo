const Seat = require('../models/seat.model');
let db = require('../db');

exports.getAll = async (req, res) => {
    try{
        res.json( await Seat.find());
    }
    catch(err){
        res.status(500).json({ message : err});
    }
};

exports.getSeatById = async (req, res) => {
    try {
        const dep = await Seat.findById(req.params.id);
        if(!dep) res.status(404).json({ message: 'Not found' });
        else res.json(dep);
    }
    catch(err) {
        res.status(500).json({ message: err });
      }
};

exports.postSeat = async (req, res) => {
    try {
        const {id, day, seat, client, email} = req.body;
        const seatTaken = await Seat.findOne({ seat: seat, day:day})

    if(seatTaken) {
        return res.status(409).send('This seat is taken');
    } else {
        const newSeat = new Seat({ id: id, day: day, seat: seat, client: client, email: email});
        await newSeat.save();
        req.io.emit('updateSeats', (await Seat.find()));
        const selectedDays = Seat.findOne({ day : day});
        req.io.emit('seatsCounter', selectedDays);
        res.json( await Seat.find());
        
    };
    }
    catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.putSeatById = async (req, res) => {
    const {id, day, seat, client, email} = req.body;
    try {
        await Seat.updateOne({ _id: req.params.id}, {$set : {id: id, day: day, seat: seat, client: client, email: email}});
        res.json( await Seat.find());
      }
      catch(err) {
          res.status(500).json({ message: err });
        }
};

exports.deleteSeat = async(req, res) => {
    try {
      const dep = await (Seat.findById(req.params.id));
      if(dep){
        await Seat.deleteOne({_id: req.params.id});
        res.json( await Seat.find());
      }
      else res.status(404).json({ message: 'not found'});
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  };
