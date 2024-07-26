"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";

const AddWorkshopPage = () => {
  const [title, setTitle] = useState<string>("");
  const [organizers, setOrganizers] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const handleAddWorkshop = async () => {
    if (!title || !organizers || !startDate) {
      alert("Please fill in all required fields.");
      return;
    }

    const organizersArray = organizers.split(",").map((org) => org.trim());

    try {
      const response = await fetch("/api/PublicationsRoute/Workshops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          organizers: organizersArray,
          startDate,
          endDate: endDate || undefined,
          location: location || undefined,
          link: link || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Optionally handle success or redirect
      console.log("Workshop added successfully!");
    } catch (error) {
      console.error("Error adding workshop:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Add Workshop</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter workshop title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter organizers (comma separated)"
            value={organizers}
            onChange={(e) => setOrganizers(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter start date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter end date (optional)"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter link (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
        </div>
        <Link
          href="/publications"
          onClick={handleAddWorkshop}
          className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Add Workshop
        </Link>
        <Link
          href="/publications"
          className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4"
        >
          Back to Workshops
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default AddWorkshopPage;
