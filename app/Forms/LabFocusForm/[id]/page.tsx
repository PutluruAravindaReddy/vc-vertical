// EditTaskPage.tsx
"use client"
import { useState, useEffect } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import Link from 'next/link';

interface Task {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const EditTaskPage = ({ params }: any) => {
  const taskId = params.id;
  const [task, setTask] = useState<Task>({
    _id: '',
    title: '',
    description: '',
    image: '',
  });
  const [imageUrl, setImageUrl] = useState<string>('');
  
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`/api/LabFocus/${taskId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch task');
        }

        const responseData = await response.json();
        console.log('Fetched task:', responseData.data);
        setTask(responseData.data); 
        setImageUrl(responseData.data.image);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    if (taskId) {
      fetchTask();
    }
  }, [taskId]);

  const handleUploadSuccess = (result: any) => {
    const secureUrl: string = result.info.secure_url;
    setImageUrl(secureUrl);
  };

  const handleEditTask = async () => {
    try {
      const response = await fetch(`/api/LabFocus/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: task.title,description:task.description, image: imageUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit task');
      }

    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Task</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <textarea
          placeholder="Enter title"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
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
      <Link href="/" onClick={handleEditTask} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Save Changes
      </Link>
    </div>
  );
};

export default EditTaskPage;
