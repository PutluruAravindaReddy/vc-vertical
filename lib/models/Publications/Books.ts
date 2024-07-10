import { model, models, Schema } from 'mongoose';

const bookSchema = new Schema({
  chapterTitle: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  editors: {
    type: [String],
  },
  publisher: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: String,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  },
  DOI: {
    type: String,
  },
  link: {
    type: String,
  },
}, { timestamps: true });

const Books = models.Books || model('Books', bookSchema);

export default Books;
