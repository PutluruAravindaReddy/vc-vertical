// ImageUploadPage.tsx

"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Task {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const ImageUploadPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/LabFocus', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const responseData = await response.json();
        console.log('Fetched tasks:', responseData.data);
        setTasks(responseData.data); 
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/LabFocus/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      const updatedTasks = tasks.filter(task => task._id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upload Image</h1>
      <Link href="/alltasks/addtask">Add Task</Link>
      {tasks.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
          <div className="grid grid-cols-3 gap-4">
            {tasks.map((task) => (
              <div key={task._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">{task.title}</p>
                <p className="text-lg font-medium mb-2">{task.description}</p>
                <img src={task.image} alt="Task Image" className="rounded-md" style={{ width: '100%', height: '200px' }} />
                <Link href={`/alltasks/${task._id}`}
                  className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
                    Edit
                </Link>
                <button onClick={() => handleDeleteTask(task._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
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

export default ImageUploadPage;
