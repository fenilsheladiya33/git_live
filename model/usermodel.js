var mongoose  = require("mongoose");

var userschema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:String}
   
})

module.exports = mongoose.model("gituser",userschema);


