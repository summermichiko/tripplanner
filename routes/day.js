var express = require('express');
var router = express.Router();
var models = require('../models/');

router.post('/', function(req, res, next) {
//...create day...
//req.body is an object
var dayNum = req.body.dayNum; //this is from the ajax object
var d = new models.Day({
    "dayNum": dayNum
});
d.save(function(err, day) {
    if(err) return next(err);
    res.json(day);  //sending day as a json object
});
});

router.post('/:dayId/attractions', function(req,res) {
   // ...add an attraction to day...

   models.Day.findById(req.params.dayId, function(err, day) {

   console.log(req.body.type);
   //will only be passed one at a time, use type
   day[req.body.type].push(req.body.id); //object sent to the server
   day.save();
   console.log(day);

   res.send("success!!!");
  });
});

router.get('/', function(req,res){
 //...list all days...
});


module.exports = router;












