// import React from "react";

// export default function UpcomingEvents() {
//   return (
//     <>
//  <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
//   <div className="max-w-[75rem] mx-auto">
//     {/* Grid */}
//     <div className="grid gap-12">
//       <div>
//         <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
//           Upcoming Events
//         </h2>
//         <p className="ml-2 mt-3 text-gray-800 dark:text-gray-400 text-justify">
//           <strong>1 .</strong> National Conference on Futuristic Computing
//           Trends in Financial Technologies (FCOM-Fintech) during 29-30
//           January 2024 organized by Visual Computing Vertical, Department
//           of Computing Technologies, School of Computing, SRM Institute of
//           Science and Technology, Kattankulathur - 603203.
//         </p>
//       </div>
//     </div>
//   </div>
// </div> 
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export interface UpcomingEvent {
  _id: string;
  title: string;
}

const UpcomingEventsList = () => {
  const { data: session } = useSession();
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch("/api/UpcomingEvents", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch upcoming events");
        }

        const responseData = await response.json();
        setUpcomingEvents(responseData.data);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      }
    };

    fetchUpcomingEvents();
  }, []);

  const handleDeleteUpcomingEvent = async (id: string) => {
    try {
      const response = await fetch(`/api/UpcomingEvents/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete upcoming event");
      }

      const updatedUpcomingEvents = upcomingEvents.filter(
        (event) => event._id !== id
      );
      setUpcomingEvents(updatedUpcomingEvents);
    } catch (error) {
      console.error("Error deleting upcoming event:", error);
    }
  };

  return (
    <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div className="max-w-[75rem] mx-auto">
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Upcoming Events
            </h2>
            {upcomingEvents.map((event, index) => (
              <div key={event._id}>
                <p className="ml-2 mt-3 text-gray-800 dark:text-gray-400 text-justify">
                  <strong>{index + 1}.</strong> {event.title}
                </p>
                {session?.user?.name && (
                  <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
                    <Link
                      href={`/Forms/UpcomingEventsForm/${event._id}`}
                      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200"
                    >
                      Edit
                    </Link>
                    <Link
                      className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                      href="/Forms/UpcomingEventsForm/new"
                    >
                      Add
                    </Link>
                    <button
                      onClick={() => handleDeleteUpcomingEvent(event._id)}
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
      </div>
    </div>
  );
};

export default UpcomingEventsList;


    // <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
    //   <div className="max-w-[75rem] mx-auto">
    //     {/* Grid */}
    //     <div className="grid gap-12">
    //       <div>
    //         <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
    //           Upcoming Events
    //         </h2>
    //         {upcomingEvents.map((event) => (
    //           <div
    //             key={event._id}
    //             className="bg-white dark:bg-[#333333] shadow-md rounded-lg p-4 m-2 max-w-full"
    //           >
    //             <h2 className="text-md sm:text-xl dark:text-[#EDEDED] font-bold text-justify mb-2">
    //               {event.title}
    //             </h2>
    //             {session?.user?.name && (
    //               <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
    //                 <Link
    //                   href={`/Forms/UpcomingEventsForm/${event._id}`}
    //                   className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
    //                 >
    //                   Edit
    //                 </Link>
    //                 <Link
    //                   className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
    //                   href="/Forms/UpcomingEventsForm/new"
    //                 >
    //                   Add
    //                 </Link>
    //                 <button
    //                   onClick={() => handleDeleteUpcomingEvent(event._id)}
    //                   className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
    //                 >
    //                   Delete
    //                 </button>
    //               </div>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default UpcomingEventsList;
