// components/FacultyLoadingSkeleton.tsx

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NavBarSkeleton from "../components/NavBar/NavBarSkeleton";
import FooterSkeleton from "../components/Footer/FooterSkeleton";

const Loading = () => {
  return (
    <SkeletonTheme>
      <NavBarSkeleton />
      {/* Main Content */}
      <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto">
      <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto">
        <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] sm:py-3 dark:text-white py-0">
          <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
            Gallery
          </span>
        </h2>
      </div>

      <div className="flex justify-center my-14 sm:my-10">
        <div className="grid w-[95%] grid-cols-2 sm:grid-cols-4 gap-2">
          {/* Placeholder grid items */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="skeleton-grid-item">
              <Skeleton height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>

      <FooterSkeleton />
    </SkeletonTheme>
  );
};

export default Loading;
