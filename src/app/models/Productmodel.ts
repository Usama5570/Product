import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // id:{type: 'number'},
    name:{type:'String', required:true} ,
    price:{type: Number},
    description:{type:'String', required: true},
    picture:{type:'string'}
})
 const Productmodel = mongoose.models.Product || mongoose.model ("Product" , userSchema)
 export default Productmodel;