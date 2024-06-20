import {model,models,Schema} from "mongoose";

const mailSchema=new Schema({
  email:{
    type:String,
    // unique:true,
  }
})

const Mail=models.Mail || model("Mail",mailSchema);

export default Mail;