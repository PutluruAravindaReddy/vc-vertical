import {model,models,Schema} from 'mongoose'
import { title } from 'process'


const Upcoming=new Schema({
    title:{
        type:String,
        required:true
    }
})

const UpcomingEvents=models.UpcomingEvents || model("UpcomingEvents",Upcoming);

export default UpcomingEvents;