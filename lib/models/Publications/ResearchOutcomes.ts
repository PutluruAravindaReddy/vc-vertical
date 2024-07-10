import { model, models, Schema } from 'mongoose';

const researchOutcomesSchema = new Schema({
  initiative: {
    type: String,
    required: true
  },
  initiators: {
    type: [String],
    required: true
  },
  activities: {
    type: [String],
    required: true
  }
}, {
  timestamps: true
});

const ResearchOutcomes = models.ResearchOutcomes || model('ResearchOutcomes', researchOutcomesSchema);

export default ResearchOutcomes;
