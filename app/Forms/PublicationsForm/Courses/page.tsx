"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface Courses {
  _id: string;
  courseName: string;
  faculty: string[];
  completionDate: string;
  platform: string;
  duration?: string;
  badgeEarned?: string;
}

const BooksPage = () => {
  const [courses, setCourses] = useState<Courses[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/PublicationsRoute/Courses', {
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
      const response = await fetch(`http://localhost:3000/api/PublicationsRoute/Courses/${id}`, {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <Link href="/Forms/PublicationsForm/Courses/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">
        Add Course
      </Link>
      {courses.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Courses</h2>
          <div className="grid grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">Course Name: {course.courseName}</p>
                <p className="text-lg font-medium mb-2">Faculty: {course.faculty.join(', ')}</p>
                <p className="text-lg font-medium mb-2">Completion Date: {course.completionDate}</p>
                <p className="text-lg font-medium mb-2">Platform: {course.platform}</p>
                {course.duration && <p className="text-lg font-medium mb-2">Duration: {course.duration}</p>}
                {course.badgeEarned && <p className="text-lg font-medium mb-2">Badge Earned: {course.badgeEarned}</p>}
                <Link href={`/Forms/PublicationsForm/Courses/${course._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
                  Edit
                </Link>
                <button onClick={() => handleDeleteCourse(course._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
