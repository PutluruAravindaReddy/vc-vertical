// components/FacultyLoadingSkeleton.tsx

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NavBarSkeleton from "../components/NavBar/NavBarSkeleton";
import FooterSkeleton from "../components/Footer/FooterSkeleton";

const Loading = () => {
  return (
    <SkeletonTheme>
      <NavBarSkeleton />
      <main>
        <div className="container mx-auto px-4 py-8">
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <Skeleton height={40} width={300} />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Publication Card 1 */}
              <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <Skeleton height={150} />
                <Skeleton height={20} width={200} className="mt-2" />
                <Skeleton height={16} count={2} className="mt-1" />
                <div className="flex justify-end mt-4">
                  <Skeleton height={32} width={80} />
                </div>
              </div>

              {/* Publication Card 2 */}
              <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <Skeleton height={150} />
                <Skeleton height={20} width={200} className="mt-2" />
                <Skeleton height={16} count={2} className="mt-1" />
                <div className="flex justify-end mt-4">
                  <Skeleton height={32} width={80} />
                </div>
              </div>

              {/* Publication Card 3 */}
              <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <Skeleton height={150} />
                <Skeleton height={20} width={200} className="mt-2" />
                <Skeleton height={16} count={2} className="mt-1" />
                <div className="flex justify-end mt-4">
                  <Skeleton height={32} width={80} />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <Skeleton height={40} width={300} />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Publication Card 4 */}
              <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <Skeleton height={150} />
                <Skeleton height={20} width={200} className="mt-2" />
                <Skeleton height={16} count={2} className="mt-1" />
                <div className="flex justify-end mt-4">
                  <Skeleton height={32} width={80} />
                </div>
              </div>

              {/* Publication Card 5 */}
              <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <Skeleton height={150} />
                <Skeleton height={20} width={200} className="mt-2" />
                <Skeleton height={16} count={2} className="mt-1" />
                <div className="flex justify-end mt-4">
                  <Skeleton height={32} width={80} />
                </div>
              </div>

              {/* Publication Card 6 */}
              <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <Skeleton height={150} />
                <Skeleton height={20} width={200} className="mt-2" />
                <Skeleton height={16} count={2} className="mt-1" />
                <div className="flex justify-end mt-4">
                  <Skeleton height={32} width={80} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterSkeleton />
    </SkeletonTheme>
  );
};

export default Loading;
