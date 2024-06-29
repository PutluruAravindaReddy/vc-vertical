import React from 'react';
import ImageGrid from './ImageGrid/ImageGrid';

const Eventspage: React.FC = () => {
  const events = [
    {
        title:
          'Two Days Workshop with Hands on Training in Computer Vision in association with Madras Mind Works',
        description:
          'Conducted by Mr. Sathyapriyan S, Director, Madras MindWorks Pvt. Ltd., Chennai.',
        date: '19/9/2023 & 20/9/2023',
        organizer: 'Mr. Sathyapriyan S, Director, Madras MindWorks Pvt. Ltd., Chennai',
        location: 'Online',
        images: [
          { src: '/img/Events/event_1/img_1.jpeg', alt: 'Image 1 Description' },
          { src: '/img/Events/event_1/img_2.jpeg', alt: 'Image 2 Description' },
          { src: '/img/Events/event_1/img_3.jpeg', alt: 'Image 3 Description' },
          { src: '/img/Events/event_1/img_4.jpeg', alt: 'Image 3 Description' },
        ],
      },
      {
        title:
          'Technical Discussion on Visual Computing Lab Equipment with Madras Mind Works',
        description:
          'Conducted by Mr. Sathyapriyan S, Director, Madras MindWorks Pvt. Ltd., Chennai and his Technical Team.',
        date: '29/9/2023',
        organizer:
          'Mr. Sathyapriyan S, Director, Madras MindWorks Pvt. Ltd., Chennai and Technical Team',
        location: 'Online',
        images: [
          { src: '/img/Events/event_2/img_1.jpeg', alt: 'Image 4 Description' },
          { src: '/img/Events/event_2/img_2.jpeg', alt: 'Image 5 Description' },
        ],
      },
      {
        title:
          'Workshop on Artificial Intelligence for Disaster Management',
        description:
          '',
        date: '16th & 17th February 2023',
        organizer:
          'SRMIST',
        location: 'Online',
        images: [
          { src: '/img/Events/event_3/img_1.jpg', alt: 'Image 7 Description' },
          { src: '/img/Events/event_3/img_2.jpg', alt: 'Image 8 Description' },
        ],
      },
  ];

  return (
    <div className="max-w-[84rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto p-8 mb-5">
              <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] sm:py-3 dark:text-white py-0">
        <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
          Events
        </span>
      </h2>
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
            <h2 className="text-[0.8rem] sm:text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-sm sm:text-md text-gray-600 font-bold  sm:mb-2">{event.description}</p>
            <p className="text-sm sm:text-md text-gray-500 sm:mb-2">
              <span className="font-semibold">Date:</span> {event.date}
            </p>
            <p className="text-sm sm:text-md text-gray-500 sm:mb-2">
              <span className="font-semibold">Organizer:</span> {event.organizer}
            </p>
            <p className="text-sm sm:text-md text-gray-500 sm:mb-2">
              <span className="font-semibold">Location:</span> {event.location}
            </p>
            <ImageGrid images={event.images} />
          </div>
        ))}
      </div>
    
  );
};

export default Eventspage;
