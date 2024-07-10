"use client"
import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai"; // Import delete icon

const EditEventPage = ({ params }: any) => {
  const id = params.id;

  const [images, setImages] = useState<{ url: string; publicId: string }[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [organizer, setOrganizer] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    // Fetch existing event data
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/EventsRoute/EventsAll/${id}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Events');
        }

        const event = await response.json();
        console.log("Fetched event:", event);

        setTitle(event.data.title);
        setDescription(event.data.description);
        setDate(event.data.date);
        setOrganizer(event.data.organizer);
        setLocation(event.data.location);

        // Set images state with the correct format
        if (Array.isArray(event.data.images)) {
          const formattedImages = event.data.images.map((link: string) => ({
            url: link,
            publicId: link.split('/').pop()?.split('.')[0] || '',
          }));
          // console.log(formattedImages);
          setImages(formattedImages);
          // console.log(images);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  const handleUploadSuccess = (result: any) => {
    const secureUrl: string = result.info.secure_url;
    const publicId: string = result.info.public_id;
    setImages((prevImages) => [...prevImages, { url: secureUrl, publicId }]);
  };

  const handleDeleteImage = async (index: number) => {
    const imageToDelete = images[index];
    const updatedImages = images.filter((_, i) => i !== index);

    try {
      // Delete image from Cloudinary
      const response = await fetch(`/api/EventsRoute/${imageToDelete.publicId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ SingleimgID : imageToDelete.publicId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete image from Cloudinary");
      }

      setImages(updatedImages);
    } catch (error) {
      console.error("Error deleting image from Cloudinary:", error);
    }
  };

  const handleUpdateEvent = async () => {
    if (!title ||  !date || !organizer || !location ) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }

    try {
      const response = await fetch(`/api/EventsRoute/EventsAll/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          date,
          organizer,
          location,
          images: images.map((img) => img.url),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Event updated successfully!");
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Event</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter title"
          value={title} required
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
        placeholder="Enter date"
          type="text"
          value={date} required
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter organizer"
          value={organizer} required
          onChange={(e) => setOrganizer(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location} required
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
        {images.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={`Uploaded Image ${index + 1}`}
                  className="rounded-md"
                  style={{ width: "100px", height: "100px" }}
                />
                <AiFillDelete
                  className="absolute top-0 right-0 text-red-600 cursor-pointer"
                  onClick={() => handleDeleteImage(index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Link  href="/events"
        onClick={handleUpdateEvent}
        className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer"
      >
        Update Event
      </Link>
      <Link
        href="/events"
        className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer ml-4"
      >
        Back to Events
      </Link>
    </div>
  );
};

export default EditEventPage;
