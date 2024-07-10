"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  organizer: string;
  location: string;
  images: string[];
}

const ImageUploadPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/EventsRoute/EventsAll', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Events');
        }

        const responseData = await response.json();
        console.log('Fetched events:', responseData.data);
        setEvents(responseData.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/EventsRoute//EventsAll/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete Event');
      }

      const updatedEvents = events.filter(event => event._id !== id);
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error deleting Event:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <Link href="/Forms/EventsForm/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">Add Event</Link>

      {events.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Event List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <div key={event._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">Title: {event.title}</p>
                <p className="text-lg font-medium mb-2">Description: {event.description}</p>
                <p className="text-lg font-medium mb-2">Date: {new Date(event.date).toLocaleDateString()}</p>
                <p className="text-lg font-medium mb-2">Organizer: {event.organizer}</p>
                <p className="text-lg font-medium mb-2">Location: {event.location}</p>
                <div className="flex justify-center my-4">
                  {event.images.map((image, index) => (
                    <img key={index} src={image} alt={`Event Image ${index + 1}`} className="rounded-md mx-auto" width={50} height={50} style={{  marginBottom: '8px' }} />
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <Link href={`/Forms/EventsForm/${event._id}`} className="mx-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">Edit</Link>
                  <button onClick={() => handleDeleteEvent(event._id)} className="mx-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {events.length === 0 && (
        <p className="text-lg mt-4">No events found.</p>
      )}
    </div>
  );
};

export default ImageUploadPage;
