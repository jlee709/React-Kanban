const express = require('express');
const router = express.Router();
const db = require('../../models');
const cards = db.cards;



router.get('/', (req, res) => {
  cards.all().then((cards) =>{
    console.log(cards, 'CARDS ROUTER REPORTING IN!!!');
    res.json(cards);
  });
});

router.post('/new', (req, res) => {
  console.log(req.body, "THIS IS THE REQ BODY");
  // let card = {
  //   title: '',
  //   description: '',
  //   dueDate: '',
  //   priority: '',
  //   status: ''
  // };

  db.cards.create({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.status,
    status: req.body.status
  })
  .then( (card) => {
    res.json(card);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = router;

// title: DataTypes.STRING,
//     description: DataTypes.STRING,
//     dueDate: DataTypes.STRING,
//     priority: DataTypes.INTEGER,
//     status: DataTypes.STRING