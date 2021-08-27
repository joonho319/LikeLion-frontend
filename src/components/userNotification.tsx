
import React from 'react';

export const UserNotification = () => {
  return (
    <div className="relative bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">오늘의 미션: 000에 대해 생각해보세요</span>
            <span className="hidden md:inline">오늘의 미션: 000에 대해 생각해보세요</span>
          </p>
        </div>
      </div>
    </div>
  )
}