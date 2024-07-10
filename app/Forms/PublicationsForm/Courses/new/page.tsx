"use client";
import { useState } from 'react';
import Link from 'next/link';

const AddBookPage = () => {
  const [courseName, setCourseName] = useState<string>('');
  const [faculty, setFaculty] = useState<string>('');
  const [completionDate, setCompletionDate] = useState<string>('');
  const [platform, setPlatform] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [badgeEarned, setBadgeEarned] = useState<string>('');

  const handleAddCourse = async () => {
    if (!courseName || !faculty || !completionDate || !platform) {
      alert('Please fill in all required fields.');
      return;
    }

    const facultyArray = faculty.split(',').map(fac => fac.trim());

    try {
      const response = await fetch('/api/PublicationsRoute/Courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseName,
          faculty: facultyArray,
          completionDate,
          platform,
          duration: duration || undefined,
          badgeEarned: badgeEarned || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally handle success or redirect
      console.log('Course added successfully!');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Course</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter faculty (comma separated)"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter completion date"
          value={completionDate}
          onChange={(e) => setCompletionDate(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter duration (optional)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter badge earned (optional)"
          value={badgeEarned}
          onChange={(e) => setBadgeEarned(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications"
        onClick={handleAddCourse}
        className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer"
      >
        Add Course
      </Link>
      <Link
        href="/publications"
        className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer ml-4"
      >
        Back to Courses
      </Link>
    </div>
  );
};

export default AddBookPage;
