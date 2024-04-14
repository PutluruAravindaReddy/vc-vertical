// FeatureCard.js
import React from 'react';

interface FeatureCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageUrl, title, description }) => {
  return (
    
  <div className="group flex flex-col h-full border border-base cursor-pointer border-black border-solid shadow-sm rounded-xl overflow-hidden transition duration-300 transform hover:scale-104 hover:shadow-2xl hover:border-[0.1rem] hover:border-black hover:border-gradient hover:border-opacity-100">
      <div className="h-48 sm:h-52 flex justify-center items-center bg-blue rounded-t-xl">
        <img
          src={imageUrl}
          alt=""
          className="object-cover w-full h-full rounded-t-xl"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {title}
        </h3>
        <p className="mt-3 text-gray-500 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
