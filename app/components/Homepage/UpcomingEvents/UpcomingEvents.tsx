import React from "react";

export default function UpcomingEvents() {
  return (
    <>
      <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <div className="max-w-[75rem] mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                Upcoming Events
              </h2>
              <p className="ml-2 mt-3 text-gray-800 dark:text-gray-400 text-justify">
                <strong>1 .</strong> National Conference on Futuristic Computing
                Trends in Financial Technologies (FCOM-Fintech) during 29-30
                January 2024 organized by Visual Computing Vertical, Department
                of Computing Technologies, School of Computing, SRM Institute of
                Science and Technology, Kattankulathur - 603203.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
