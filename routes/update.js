var express = require('express');
var router = express.Router();
// const Login = require('../models/login_model');
const User = require('../models/user_model');

router.put('/', function (req, res, next) {
    // console.log(req.body)
    var id = req.body.id
    var email = req.body.email
    var rollno = req.body.rollno
    var cls = req.body.class
    

    User.find({ "_id": id })
        .then(data => {
            // console.log(data)
            if(data.length > 0){

            if (email) {
                User.updateOne({ "_id": id }, { $set: { email: email } })
                    .then(data2 => {
                        // res.json({ message: "sucessfully updated category_name" });
                    })
                    .catch(err => {
                        res.json({ message: err })
                    })
            }
            if (rollno) {
                User.updateOne({ "_id": id }, { $set: { rollno: rollno } })
                    .then(data2 => {
                        // res.json({ message: "sucessfully updated category_name" });
                    })
                    .catch(err => {
                        res.json({ message: err })
                    })
            }
            if (cls) {
                User.updateOne({ "_id": id }, { $set: { class: cls } })
                    .then(data2 => {
                        // res.json({ message: "sucessfully updated category_name" });
                    })
                    .catch(err => {
                        res.json({ message: err })
                    })
            }
    
            res.json({ sucess: true, message: "Succesfully updated User_type lists" });
        }else{

            res.json({ sucess: false, message: "no user type found" });
        }
    })
    .catch(err => {
        res.json({ sucess: false, message: "invalid Id" });
    })
 
});
module.exports = router;
