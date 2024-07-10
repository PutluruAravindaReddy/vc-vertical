// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useSession } from "next-auth/react";

// interface Task {
//   _id: string;
//   title: string;
//   description: string;
//   image: string;
// }

// const Focuses = () => {
//   const { data: session } = useSession();
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch("/api/LabFocus", {
//           method: "GET",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch tasks");
//         }

//         const responseData = await response.json();
//         // console.log("Fetched tasks:", responseData.data);
//         setTasks(responseData.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const handleDeleteTask = async (id: string) => {
//     try {
//       const response = await fetch(`/api/LabFocus/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete task");
//       }

//       const updatedTasks = tasks.filter((task) => task._id !== id);
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   return (
//     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//       <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
//         <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
//           Particularly
//         </span>
//         , our recent lab focus on studying
//       </h2>

//       {tasks.length > 0 && (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tasks.map((task) => (
//             <div
//               key={task._id}
//               className="group flex flex-col h-full border border-base cursor-pointer border-black border-solid shadow-sm rounded-xl overflow-hidden transition duration-300 transform hover:scale-104 hover:shadow-2xl hover:border-[0.1rem] hover:border-black hover:border-gradient hover:border-opacity-100"
//             >
//               <div className="h-48 sm:h-52 flex justify-center items-center bg-blue rounded-t-xl">
//                 <img
//                   src={task.image}
//                   alt=""
//                   className="object-cover w-full h-full rounded-t-xl"
//                 />
//               </div>
//               <div className="p-4 md:p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
//                   {task.title}
//                 </h3>
//                 <p className="mt-3 text-gray-500 text-justify">
//                   {task.description}
//                 </p>
//               </div>
//               {session?.user?.name && (
//                 <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
//                   <Link
//                     className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
//                     href="/Forms/LabFocusForm/new"
//                   >
//                     Add Task
//                   </Link>
//                   <Link
//                     href={`/Forms/LabFocusForm/${task._id}`}
//                     className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDeleteTask(task._id)}
//                     className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//       {
//         tasks.length <=0 && (
//           <h1>No Lab Focuses Found</h1>
//         )
//       }
//     </div>
//   );
// };

// export default Focuses;


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface Task {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const Focuses = () => {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/LabFocus", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const responseData = await response.json();
        console.log("Fetched tasks:", responseData.data);
        
        if (Array.isArray(responseData.data)) {
          setTasks(responseData.data);
        } else {
          console.error("Fetched data is not an array:", responseData.data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchTasks();
  }, []);

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/LabFocus/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  if (loading) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <SkeletonTheme>
          <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
            <Skeleton height={20} width={`60%`} />
          </h2>
          <Skeleton count={3} height={150} />
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
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
              className="group flex flex-col h-full border border-base cursor-pointer border-black border-solid shadow-sm rounded-xl overflow-hidden transition duration-300 transform hover:scale-104 hover:shadow-2xl hover:border-[0.1rem] hover:border-black hover:border-gradient hover:border-opacity-100"
            >
              <div className="h-48 sm:h-52 flex justify-center items-center bg-blue rounded-t-xl">
                <img
                  src={task.image}
                  alt=""
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  {task.title}
                </h3>
                <p className="mt-3 text-gray-500 text-justify">
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
                    onClick={() => handleDeleteTask(task._id)}
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
      {tasks.length === 0 && !loading && (
        <h1>No Lab Focuses Found</h1>
      )}
    </div>
  );
};

export default Focuses;

