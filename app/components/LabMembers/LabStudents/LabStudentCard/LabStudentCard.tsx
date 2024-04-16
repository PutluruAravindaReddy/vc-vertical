import React from "react";

// Define the type of student object
interface Student {
  image: string;
  name: string;
  id: string;
  // Add any other properties here if needed
}

// Define the type of the students prop
interface Props {
  students: Student[];
}

// Use the Props interface to specify the type of props
export default function LabStudentCard({ students }: Props) {
  // Check if students array is not provided or empty
  if (!students || students.length === 0) {
    return <div>No students available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-12">
      {/* Map over the students array */}
      {students.map((student: Student, index: number) => (
        <div key={index} className="text-center">
          {/* Check if student image is provided */}
          {student.image && (
            <img
              className="rounded-full size-20 mx-auto"
              src={student.image}
              alt="Image Description"
            />
          )}
          <div className="mt-2 sm:mt-4">
            {/* Check if student name is provided */}
            {student.name && (
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                {student.name}
              </h3>
            )}
            {/* Check if student id is provided */}
            {student.id && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {student.id}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
