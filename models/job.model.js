
const mongoose = require("mongoose");
 //dloGf9vHIcmXYGjl
 //mongodb+srv://vikasagrawal252:dloGf9vHIcmXYGjl@cluster0.7guyne2.mongodb.net/
const jobSchema = mongoose.Schema({
    title :{
         type : String,
         required : true
    },
    location :{
        type :String,
        required : true,
    },
    minExp : {
        type : Number, 
        default:0,
    },
      salary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    skills: {
        type : [String],
        required : true
    }
})
const jobModel = mongoose.model("jobs",jobSchema);
module.exports = jobModel;