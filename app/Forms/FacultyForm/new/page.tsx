// AddTaskPage.tsx
"use client"
import { useState } from 'react';
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import Link from 'next/link';

const AddTaskPage = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [profession, setProfession] = useState<string>(''); // State for profession
  const [description, setDescription] = useState<string>('');
  const [knowmore, setKnowmore] = useState<string>('');

  const handleUploadSuccess = (result: any) => {
    const secureUrl: string = result.info.secure_url;
    setImageUrl(secureUrl);
  };

  const handleAddTask = async () => {
    if (!name || !profession || !description || !imageUrl || !knowmore) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    try {
      const response = await fetch('/api/FacultyRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, profession, description, image: imageUrl, knowmore }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally handle success or redirect
      console.log('Task added successfully!');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Task</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name} required
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <select
          value={profession} required
          onChange={(e) => setProfession(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        >
          <option value="">Select profession</option>
          <option value="Professor">Professor</option>
          <option value="Associate Professor">Associate Professor</option>
          <option value="Assistant Professor">Assistant Professor</option>
        </select>
        <textarea
          placeholder="Enter description"
          value={description} required
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter knowmore"
          value={knowmore} required
          onChange={(e) => setKnowmore(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <CldUploadButton
          uploadPreset="vcverticalfaculty" // Adjust as per your Cloudinary settings
          onSuccess={handleUploadSuccess}
          className="mt-2 bg-black hover:bg-black text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Upload image
        </CldUploadButton>
        {imageUrl && (
          <img
            className="mt-4"
            src={imageUrl}
            alt="Uploaded Image"
            style={{ width: '200px', height: '200px' }}
          />
        )}
      </div>
      <Link
        href="/faculty"
        onClick={handleAddTask}
        className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer"
      >
        Add Task
      </Link>
      <Link
        href="/faculty"
        className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer ml-4"
      >
        Back to Tasks
      </Link>
    </div>
  );
};

export default AddTaskPage;
