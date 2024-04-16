// components/StudentGrid.js
import React from "react";

export default function LabStudentCard({ students }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-12">
          {students.map((student, index) => (
            <div key={index} className="text-center">
              <img
                className="rounded-full size-20 mx-auto"
                src={student.image}
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {student.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    
}
