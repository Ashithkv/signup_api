var express = require('express');
var router = express.Router();
const User = require('../models/user_model');
const Login = require('../models/login_model');
/* GET users listing. */

router.post('/',(req,res) => {
  const login = new Login({
    user_name:req.body.username,
    password:req.body.pass
  })
  login.save()
  .then(data=>{
    console.log(data)
    console.log()
    const user = new User({
      loginID :data._id,
      stud_name: req.body.name,
      email: req.body.email,
      rollno: req.body.rollno,
      class: req.body.cls,
      
    })
    user.save()
    .then(data1=>{
        res.json({data1})
    }).catch(err=>{
        res.send({'Error':err})
        
    })
  })
  .catch(err=>{
    res.send({'error':err})
  })
})

module.exports = router;