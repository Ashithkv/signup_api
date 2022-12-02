const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    loginID : {
        type : mongoose.Schema.Types.ObjectId,
        required : false
    },
    stud_name : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    rollno :{
        type : String,
    },
    class : {
        type : String,
    },

})

module.exports = mongoose.model('user',userSchema)




