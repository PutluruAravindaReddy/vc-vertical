import { model, models, Schema } from 'mongoose';

const CertificateCourseSchema = new Schema({
    courseName: {
      type: String,
      required: true
    },
    faculty: {
      type: [String],
      required: true
    },
    completionDate: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      default: ''
    },
    badgeEarned: {
      type: String,
      default: ''
    }
  }, {
    timestamps: true // Adds createdAt and updatedAt timestamps
  });
  
  const Courses = models.Courses || model('Courses', CertificateCourseSchema);
  
  export default Courses;
