import {model,models,Schema} from 'mongoose';

const patentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
  },
  applicationNumber: {
    type: String,
  },
  date: {
    type: String,
  },
  dateOfFiling: {
    type: String,
  },
  publicationDate: {
    type: String,
  },
  dateOfGrant: {
    type: String,
  },
  designNumber: {
    type: String,
  },
  patentOffice: {
    type: String,
  },
  inventors: {
    type: [String],
  },
  link: {
    type: String,
  },
  faculty: {
    type: String,
  },
});

const Patents = models.Patents || model('Patents', patentSchema);

export default Patents;
