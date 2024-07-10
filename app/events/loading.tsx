// components/FacultyLoadingSkeleton.tsx

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NavBarSkeleton from "../components/NavBar/NavBarSkeleton";
import FooterSkeleton from "../components/Footer/FooterSkeleton";

const Loading = () => {
  const loadingEvents = Array.from({ length: 4 }).map((_, index) => ({
    _id: `loading_${index}`,
    title: <Skeleton height={20} width={`80%`} />,
    description: <Skeleton count={2} />,
    date: <Skeleton height={15} width={`50%`} />,
    organizer: <Skeleton height={15} width={`60%`} />,
    location: <Skeleton height={15} width={`50%`} />,
    images: [<Skeleton height={150} width={200} />, <Skeleton height={150} width={200} />],
  }));
  return (
    <SkeletonTheme>
      <NavBarSkeleton />
      <div className="max-w-[84rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto p-8 mb-5">
      <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] sm:py-3 dark:text-white py-0">
        <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
          Events
        </span>
      </h2>
      {loadingEvents.map((event) => (
        <div key={event._id} className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
          <h2 className="text-[0.8rem] sm:text-xl font-semibold mb-2">{event.title}</h2>
          <p className="text-sm sm:text-md text-gray-600 font-bold sm:mb-2">{event.description}</p>
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
                  {image}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
            <Skeleton width={80} height={30} />
            <Skeleton width={80} height={30} />
            <Skeleton width={80} height={30} />
          </div>
        </div>
      ))}
    </div>

      <FooterSkeleton />
    </SkeletonTheme>
  );
};

export default Loading;
