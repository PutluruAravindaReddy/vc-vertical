"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface Task {
  _id: string;
  name: string;
  profession: string;
  description: string;
  image: string;
  knowmore: string;
}

const Faculty = () => {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<string>('');
  const [confirmationInput, setConfirmationInput] = useState<string>('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/FacultyRoute', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Faculty');
        }

        const responseData = await response.json();
        console.log('Fetched tasks:', responseData.data);
        const sortedTasks = sortTasksByHierarchy(responseData.data);
        setTasks(sortedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const sortTasksByHierarchy = (tasks: Task[]) => {
    const hierarchyOrder = ['Professor', 'Associate Professor', 'Assistant Professor'];
    const sortedTasks = tasks.sort((a, b) => {
      const indexA = hierarchyOrder.indexOf(a.profession);
      const indexB = hierarchyOrder.indexOf(b.profession);
      return indexA - indexB;
    });
    return sortedTasks;
  };

  const handleDeleteTask = async () => {
    try {
      const response = await fetch(`/api/FacultyRoute/${taskToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete Faculty');
      }

      const updatedTasks = tasks.filter(task => task._id !== taskToDelete);
      setTasks(updatedTasks);
      setShowConfirm(false);
      setTaskToDelete('');
      setConfirmationInput('');
    } catch (error) {
      console.error('Error deleting Faculty:', error);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setConfirmationInput('');
  };

  const closeModal = () => {
    setTaskToDelete('');
    setShowConfirm(false);
    setConfirmationInput('');
  };

  return (
    <>
      <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
          <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
            Faculty
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {tasks.map((task) => (
            <div key={task._id} className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 hover:scale-105 hover:border-black hover:text-blue hover:border hover:border-solid">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center size-[82px] hover:scale-105 rounded-full border-4 border-blue-50 bg-blue dark:border-blue-900 dark:bg-blue-800">
                  <img
                    src={task.image}
                    alt=""
                    className="size-[74px] rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex-shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white cursor-pointer">
                    {task.name}
                  </h3>
                  <p className="text-gray-500 text-justify">{task.profession}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 cursor-pointer">
                {task.description}
              </p>
              <Link
                href={task.knowmore}
                className="mt-2 inline-flex items-center gap-x-1.5 text-[1rem] text-blue decoration-2 group-hover:underline font-medium"
              >
                Know more
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              {session?.user?.name && (
                <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
                  <Link
                    className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                    href="/Forms/FacultyForm/new"
                  >
                    Add Task
                  </Link>
                  <Link
                    href={`/Forms/FacultyForm/${task._id}`}
                    className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      setTaskToDelete(task._id);
                      setShowConfirm(true);
                    }}
                    className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 p-4 sm:p-6 md:p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 float-right"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">Type "delete" to confirm:</p>
            <input
              type="text"
              value={confirmationInput}
              onChange={(e) => setConfirmationInput(e.target.value)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
              placeholder="Type 'delete' to confirm"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                disabled={confirmationInput.toLowerCase() !== "delete"}
                onClick={() => {
                  if (confirmationInput.toLowerCase() === 'delete') {
                    handleDeleteTask();
                  }
                }}
                className={`px-4 py-2 rounded-md ${
                  confirmationInput.toLowerCase() === "delete"
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Faculty;

