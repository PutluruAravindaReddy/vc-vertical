import { model, models, Schema } from 'mongoose';

const EquipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  installationDate: {
    type: String,
    required: true,
  },
  researchTests: {
    type: [String],
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
}, {
  timestamps: true,
});

const VCLAB_Equipments = models.VCLAB_Equipments || model('VCLAB_Equipments', EquipmentSchema);

export default VCLAB_Equipments;
