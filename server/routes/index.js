var express = require('express');
var router = express.Router();
var TicketCollection=require('../models/TicektsSchema')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Help Desk' });
});
router.get('/tickets/seeddata/:ticket_person_reporting/:ticket_problem_description/:ticket_date', function(req, res, next) {
  TicketCollection.create({
    ticket_person_reporting: req.params.ticket_person_reporting,
    ticket_problem_description: req.params.ticket_problem_description,
    ticket_date: req.params.ticket_date
  }),(errors,results)=>{
    if(errors) res.send(errors);
    else res.send(results)
  }
});

router.get('/tickets/all',(req,res)=>{
  TicketCollection.find({},(errors,results)=>{
    if (errors)
    {
      res.send(errors)
    }
    else
    {
      res.send(results)
    }
  })
});
module.exports = router;
