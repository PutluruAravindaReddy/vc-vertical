export interface CertificateCourse {
    courseName: string;
    faculty: string[];
    completionDate: string;
    platform: string;
    duration?: string;
    badgeEarned?: string;
  }
  
interface CertificateCoursesListProps {
  courses: CertificateCourse[];
}

const CertificateCoursesList: React.FC<CertificateCoursesListProps> = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl font-bold text-justify mb-2">{course.courseName}</h2>
          
          {/* Participants */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Participants:</strong> {course.faculty.join(', ')}
          </p>
          
          {/* Completion Date */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Completion Date:</strong> {course.completionDate}
          </p>
          
          {/* Platform */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Platform:</strong> {course.platform}
          </p>
          
          {/* Duration (if available) */}
          {course.duration && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Duration:</strong> {course.duration}
            </p>
          )}
          
          {/* Badge Earned (if available) */}
          {course.badgeEarned && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Badge Earned:</strong> {course.badgeEarned}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificateCoursesList;
