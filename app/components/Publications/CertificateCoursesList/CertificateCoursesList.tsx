"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export interface Courses {
  _id: string;
  courseName: string;
  faculty: string[];
  completionDate: string;
  platform: string;
  duration?: string;
  badgeEarned?: string;
}

const CertificateCoursesList = () => {
  const { data: session } = useSession();
  const [courses, setCourses] = useState<Courses[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/PublicationsRoute/Courses', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const responseData = await response.json();
        console.log('Fetched courses:', responseData.data);
        setCourses(responseData.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleDeleteCourse = async (id: string) => {
    try {
      const response = await fetch(`/api/PublicationsRoute/Courses/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete course');
      }

      const updatedCourses = courses.filter(course => course._id !== id);
      setCourses(updatedCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };


  return (
    <div>
      {courses.map((course) => (
        <div key={course._id} className="bg-white dark:bg-[#333333] shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl dark:text-[#EDEDED] font-bold text-justify mb-2">{course.courseName}</h2>
          
          {/* Participants */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className='dark:text-gray-200'>Participants:</strong> {course.faculty.join(', ')}
          </p>
          
          {/* Completion Date */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className='dark:text-gray-200'>Completion Date:</strong> {course.completionDate}
          </p>
          
          {/* Platform */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className='dark:text-gray-200'>Platform:</strong> {course.platform}
          </p>
          
          {/* Duration (if available) */}
          {course.duration && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className='dark:text-gray-200'>Duration:</strong> {course.duration}
            </p>
          )}
          
          {/* Badge Earned (if available) */}
          {course.badgeEarned && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className='dark:text-gray-200'>Badge Earned:</strong> {course.badgeEarned}
            </p>
          )}
          {session?.user?.name && (
            <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
              <Link
                href={`/Forms/PublicationsForm/Courses/${course._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/PublicationsForm/Courses/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeleteCourse(course._id)}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificateCoursesList;
