var express = require('express');
var router = express.Router();
// const Login = require('../models/login_model');
const User = require('../models/user_model');

router.delete('/:id', (req, res) => {
    User.deleteOne({
        _id: req.params.id
    }).then(
      () => {
        res.json({message: 'Deleted!'});
      }
    ).catch(
      (error) => {
        res.json({error: error});
      }
    )
})

router.delete('/:id', (req,res) =>{
    User.findByIdAndDelete(req.params.id).then(() =>{
        res.json({message: 'Deleted!!!'});
        }
    ).catch(
        (error) => {
            res.json({error: error});
        }
    )    
})

router.delete('/',(req,res) =>{
    User.deleteMany({}).then(() =>{
        res.json({message: 'Deleted all collections!'});
        }
    ).catch(
        (error) => {
            res.json({error: error});
        }
    )    
        
})
    
module.exports = router;


