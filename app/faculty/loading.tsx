// components/FacultyLoadingSkeleton.tsx

import NavBarSkeleton from '../components/NavBar/NavBarSkeleton';
import FooterSkeleton from '../components/Footer/FooterSkeleton';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Loading = () => {
  return (
    <SkeletonTheme >
      <NavBarSkeleton/>
    <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
        <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
          <Skeleton height={24} width={120} />
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {/* Loading Card Skeletons */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
              <Skeleton circle height={82} width={82} />
              <div className="flex-shrink-0">
                <Skeleton height={24} width={80} />
                <Skeleton height={16} width={120} />
              </div>
            </div>
            <Skeleton height={48} />
            <Skeleton height={16} width={72} />
          </div>
        ))}
      </div>
    </div>
   <FooterSkeleton/>
    </SkeletonTheme>
  );
};

export default Loading;
