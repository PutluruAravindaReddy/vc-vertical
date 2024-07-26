// AddEventPage.tsx
"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";
import { FaTrash } from "react-icons/fa"; // Import Font Awesome trash icon
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";

const AddEventPage = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [organizer, setOrganizer] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleUploadSuccess = (result: any) => {
    const secureUrl: string = result.info.secure_url;
    setImageUrls((prevUrls) => [...prevUrls, secureUrl]);
  };

  const handleDeleteImage = (index: number) => {
    setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  const handleAddEvent = async () => {
    if (!title || !date || !organizer || !location) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }

    try {
      const response = await fetch("/api/EventsRoute/EventsAll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          date,
          organizer,
          location,
          images: imageUrls,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Optionally handle success or redirect
      console.log("Event added successfully!");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Add Event</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter Date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter organizer"
            value={organizer}
            required
            onChange={(e) => setOrganizer(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            required
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <CldUploadWidget
            uploadPreset="vcverticalevents"
            onSuccess={handleUploadSuccess}
          >
            {({ open }) => (
              <button
                onClick={() => open()}
                className="mt-2 bg-black hover:bg-black text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Upload image
              </button>
            )}
          </CldUploadWidget>
          {imageUrls.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className="relative">
                  <img
                    src={imageUrl}
                    alt={`Uploaded Image ${index + 1}`}
                    className="rounded-md"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href="/VCLAB/Equipments"
          onClick={handleAddEvent}
          className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer"
        >
          Add Equipment
        </Link>
        <Link
          href="/VCLAB/Equipments"
          className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer ml-4"
        >
          Back to Equipments
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default AddEventPage;
