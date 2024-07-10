"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  organizer: string;
  location: string;
  images: string[];
}

const Eventspage = () => {
  const { data: session } = useSession();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "/api/EventsRoute/EventsAll",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Events");
        }

        const responseData = await response.json();
        console.log("Fetched events:", responseData.data);
        setEvents(responseData.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (id: string) => {
    try {
      const response = await fetch(
        `/api/EventsRoute//EventsAll/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Event");
      }

      const updatedEvents = events.filter((event) => event._id !== id);
      setEvents(updatedEvents);
    } catch (error) {
      console.error("Error deleting Event:", error);
    }
  };

  return (
    <div className="max-w-[84rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto p-8 mb-5">
      <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] sm:py-3 dark:text-white py-0">
        <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
          Events
        </span>
      </h2>
      {events.map((event) => (
        <div
          key={event._id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 w-full"
        >
          <h2 className="text-[0.8rem] sm:text-xl font-semibold mb-2">
            {event.title}
          </h2>
          <p className="text-sm sm:text-md text-gray-600 font-bold  sm:mb-2">
            {event.description}
          </p>
          <p className="text-sm sm:text-md text-gray-500 sm:mb-2">
            <span className="font-semibold">Date:</span> {event.date}
          </p>
          <p className="text-sm sm:text-md text-gray-500 sm:mb-2">
            <span className="font-semibold">Organizer:</span> {event.organizer}
          </p>
          <p className="text-sm sm:text-md text-gray-500 sm:mb-2">
            <span className="font-semibold">Location:</span> {event.location}
          </p>
          <div className="flex flex-col justify-center mt-3 sm:mt-4">
            <div className="grid w-full grid-cols-4 gap-2 sm:gap-4">
              {event.images.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <img
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="object-cover w-full h-full"
                    width={50}
                    height={50}
                    style={{ marginBottom: "8px" }}
                  />
                </div>
              ))}
            </div>
          </div>
          {session?.user?.name && (
            <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
              <Link
                href={`/Forms/EventsForm/${event._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/EventsForm/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeleteEvent(event._id)}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Eventspage;
