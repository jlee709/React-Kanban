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

module.exports = router;
