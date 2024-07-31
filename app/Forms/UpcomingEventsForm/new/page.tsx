"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";

const AddUpcomingEventPage = () => {
  const [title, setTitle] = useState<string>("");

  const handleAddUpcomingEvent = async () => {
    if (!title) {
      alert("Please enter a title.");
      return;
    }

    try {
      const response = await fetch("/api/UpcomingEvents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Upcoming event added successfully!");
    } catch (error) {
      console.error("Error adding upcoming event:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Add Upcoming Event</h1>
        <div className="mb-4">
          <input
            type="text"
            required
            placeholder="Enter event title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
        </div>
        <Link
          href="/"
          onClick={handleAddUpcomingEvent}
          className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Add Upcoming Event
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

export default AddUpcomingEventPage;
