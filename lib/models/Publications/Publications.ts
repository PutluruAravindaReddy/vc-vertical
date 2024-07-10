import {model,models,Schema} from 'mongoose';

const publicationSchema = new Schema({
    title: {
         type: String,
        required: true },
    authors: { type: [String], required: true },
    journal: { type: String },
    year: { type: Number },
    pages: { type: String },
    impactFactor: { type: Number },
    SNIP: { type: Number },
    DOI: { type: String },
    link: { type: String },
    date: { type: String }
}, { timestamps: true });

const Publications= models.Publications || model('Publications', publicationSchema);

export default Publications;
