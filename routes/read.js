var express = require('express');
var router = express.Router();
// const Login = require('../models/login_model');
const User = require('../models/user_model');

/* GET home page. */
router.get('/',(req,res) => {
  User.find()
  .then(data1=>{
    res.json({data1})
  }).catch(err=>{
    res.json({'Error':err})
    
  })
})

router.get('/:id', (req,res) => {
  var id = req.params.id
  User.find({
   "_id":id 
     
  })
  .then(data1=>{
  
    res.json({data1})
  }).catch(err=>{
    res.json({'Error':err})
    
  })
})

module.exports = router;
