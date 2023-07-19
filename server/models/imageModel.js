const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const imageModel=new Schema({
    url:String,
    tags:[String]
})

const Image=mongoose.model('Image',imageModel);
module.exports=Image;