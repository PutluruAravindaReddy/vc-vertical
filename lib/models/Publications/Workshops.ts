import { model, models, Schema } from 'mongoose';

// Define the schema for an Event
const workshopschema = new Schema({
  title: {
    type: String,
    required: true,
  },
  organizers: {
    type: [String],
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  }
}, {
  timestamps: true,
});


// Create and export the model
const Workshops= models.Workshops || model('Workshops', workshopschema);

export default Workshops;
