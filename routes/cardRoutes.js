const express = require('express');
const router = express.Router();

const data = require('../data/flashcardData.json').data;
const cards = data.cards;
router.get('/:id',(req,res)=>{
    const side = req.query.side;
    const id = req.params.id;
    const text = cards[id][side];
    const passData = {text,side,id};
    if(side==='question'){ 
     const hint = cards[id].hint;
     const sideToShow = 'answer';
     passData.hint = hint;
     passData.sideToShow = sideToShow;
     }
     res.render('card',passData);
});
router.get('/',(req,res)=>{
    const noOfCards = cards.length;
    const id = Math.floor(Math.random()*noOfCards);
    res.redirect(`/cards/${id}?side=question`);
});
module.exports = router;