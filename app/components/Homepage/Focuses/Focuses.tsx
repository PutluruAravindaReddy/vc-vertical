"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface Task {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const Focuses = () => {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<string>('');
  const [confirmationInput, setConfirmationInput] = useState<string>('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/LabFocus", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const responseData = await response.json();
        setTasks(responseData.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleDeleteTask = async () => {
    try {
      const response = await fetch(`/api/LabFocus/${taskToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      const updatedTasks = tasks.filter((task) => task._id !== taskToDelete);
      setTasks(updatedTasks);
      setShowConfirm(false);
      setTaskToDelete('');
      setConfirmationInput('');
    } catch (error) {
      console.error("Error deleting task:", error);
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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-[#FFFFFF] py-6">
        <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
          Particularly
        </span>
        , our recent lab focus on studying
      </h2>

      {tasks.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className=" dark:bg-[#333333] dark:hover:border-white hover:border-gradient dark:hover:border-opacity-100 group flex flex-col h-full border border-base cursor-pointer border-black border-solid shadow-sm rounded-xl overflow-hidden transition duration-300 transform hover:scale-104 hover:shadow-2xl hover:border-[0.1rem] hover:border-black hover:border-gradient hover:border-opacity-100"
            >
              <div className="h-48 sm:h-52 flex justify-center items-center bg-blue rounded-t-xl">
                <img
                  src={task.image}
                  alt=""
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-[#FFFFFF] dark:hover:text-white">
                  {task.title}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-[#888888] text-justify">
                  {task.description}
                </p>
              </div>
              {session?.user?.name && (
                <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
                  <Link
                    className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                    href="/Forms/LabFocusForm/new"
                  >
                    Add Task
                  </Link>
                  <Link
                    href={`/Forms/LabFocusForm/${task._id}`}
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
      )}
      {tasks.length <= 0 && <h1>No Lab Focuses Found</h1>}

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
                  if (confirmationInput.toLowerCase() === "delete") {
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
    </div>
  );
};

export default Focuses;
