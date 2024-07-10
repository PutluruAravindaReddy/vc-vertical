import { model, models, Schema } from 'mongoose';

const facultyschema = new Schema({
    name: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    knowmore: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Faculty = models.Faculty || model('Faculty', facultyschema);

export default Faculty;