import React from 'react'
import Skeleton from 'react-loading-skeleton'

const NavBarSkeleton = () => {
  return (
    <div>
      <nav className="bg-gray-900 py-4">
      <div className="max-w-[85rem] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Skeleton circle height={36} width={36} />
            <div className="ml-2">
              <Skeleton height={20} width={120} />
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="flex space-x-4">
            <Skeleton height={20} width={80} />
            <Skeleton height={20} width={80} />
            <Skeleton height={20} width={80} />
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-gray-700 rounded-full">
              <Skeleton circle height={8} width={8} />
            </div>
            <Skeleton height={20} width={80} />
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBarSkeleton
