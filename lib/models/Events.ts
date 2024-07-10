import { model, models, Schema } from 'mongoose';

// Define the Event schema
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // Assuming storing Cloudinary image URLs

    },
  ],
});

// Create and export the Event model
const Events = models.Events ||model('Events', eventSchema);

export default Events;
