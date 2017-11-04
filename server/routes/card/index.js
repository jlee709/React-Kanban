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
  let card = {
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    status: ''
  };
console.log(req.body, ' req body rom card route ZZXXXXXXXCXCXXX ! ! ! ! !! ! ! !! ');
  db.cards.create({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    status: req.body.status
  })
  .then( (card) => {
    console.log(card)
    res.json(card);
  })
  .catch( (err) => {
    console.log(err, "ROUTE ERROR FROM /NEW ROUTE ");
    res.json(err);
  });
});

// route.put('/:id/edit', (req,res) => {
//   let photoId = req.params.id;
//   let photoTitle = req.body.title;
//   let photoLink = req.body.link;

//   return Photo.update({title: photoTitle, link: photoLink}, {where:{id: photoId}})
//   .then((updatedPhoto) => {
//     console.log(updatedPhoto, " XXXXXXXXX******XXXXXXXXXX");
//   return res.json("updatedPhoto");
//   });
//  });

// route.delete('/:id/delete', isAuthenticated, (req, res) => {
//   let userId = req.params.id;

//   return Photo.findById(userId)
//   .then((user) => {
//     return Photo.destroy({where:{userId: user.id}})
//     .then(()=>{
//       return res.redirect('/:id');
//     });
//   });
// });


module.exports = router;