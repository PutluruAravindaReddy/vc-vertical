"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";

interface UpcomingEvent {
  _id: string;
  title: string;
}

const EditUpcomingEventPage = ({ params }: any) => {
  const id = params.id;
  const [upcomingEvent, setUpcomingEvent] = useState<UpcomingEvent>({
    _id: "",
    title: "",
  });

  useEffect(() => {
    const fetchUpcomingEvent = async () => {
      try {
        const response = await fetch(`/api/UpcomingEvents/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch upcoming event");
        }

        const responseData = await response.json();
        console.log("Fetched upcoming event:", responseData.data);
        setUpcomingEvent(responseData.data);
      } catch (error) {
        console.error("Error fetching upcoming event:", error);
      }
    };

    if (id) {
      fetchUpcomingEvent();
    }
  }, [id]);

  const handleEditUpcomingEvent = async () => {
    try {
      const response = await fetch(`/api/UpcomingEvents/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: upcomingEvent.title,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to edit upcoming event");
      }

      console.log("Upcoming event edited successfully!");
    } catch (error) {
      console.error("Error editing upcoming event:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Edit Upcoming Event</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter event title"
            value={upcomingEvent.title}
            onChange={(e) =>
              setUpcomingEvent({
                ...upcomingEvent,
                title: e.target.value,
              })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
        </div>
        <Link href="/"
          onClick={handleEditUpcomingEvent}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Save Changes
        </Link>
        <Link
          href="/"
          className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4"
        >
          Back
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default EditUpcomingEventPage;
