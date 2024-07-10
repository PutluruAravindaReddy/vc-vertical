"use client"
import { useState } from 'react';

import { CldUploadButton } from 'next-cloudinary';
import Link from 'next/link';

const AddTaskPage = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleUploadSuccess = (result: any) => {
    const secureUrl: string = result.info.secure_url;
    setImageUrl(secureUrl);
  };

  const handleAddTask = async () => {
    if (!title || !description || !imageUrl) {
      alert('Please enter a title and upload an image.');
      return;
    }

    try {
      const response = await fetch('/api/LabFocus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title,description, image: imageUrl }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
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
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <textarea
          placeholder="Enter description here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <CldUploadButton
          uploadPreset="vcverticalLabFocus" // Adjust as per your Cloudinary settings
          onSuccess={handleUploadSuccess}
          className="mt-2 bg-black hover:bg-black text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Upload image
        </CldUploadButton>
        {imageUrl && <img className="mt-4" src={imageUrl} alt="Uploaded Image" style={{ width: '200px', height: '200px' }} />}
      </div>
      <Link href="/" onClick={handleAddTask} className='className=" bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer">
Add Task'>Add Task</Link>
      <Link href="/" className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer ml-4">
          Back to Tasks
      </Link>
    </div>
  );
};

export default AddTaskPage;

