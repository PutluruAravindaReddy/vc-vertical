import React from 'react'
import Skeleton from 'react-loading-skeleton'

const FooterSkeleton = () => {
  return (
    <div>
       <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-[85rem] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="space-y-4">
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={80} />
            <Skeleton height={20} width={120} />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={80} />
            <Skeleton height={20} width={120} />
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={80} />
            <Skeleton height={20} width={120} />
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={80} />
            <Skeleton height={20} width={120} />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <Skeleton height={20} width={120} />
          <Skeleton height={20} width={80} />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default FooterSkeleton
