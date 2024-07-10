import {model,models,Schema} from 'mongoose';

const labFocusschema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },

},{timestamps:true});

const LabFocus=models.LabFocus || model('LabFocus',labFocusschema);

export default LabFocus;