'use client';
import React from 'react';

const CardLoader = () => {
  return (
    <div className="w-80 bg-gray-200 shadow-xl transform transition-transform duration-700 animate-pulse rounded-lg my-9">
      <div className="h-60 bg-gray-300 rounded-lg"></div>

      <div className="p-4">
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase bg-gray-300 rounded mt-2 p-1">
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </span>
          <div className="card-title mt-2">
            <div className="h-4 w-60 bg-gray-300 rounded"></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            <span className="h-8 w-52 bg-gray-300 rounded"></span>
            <span className="h-4 w-40 bg-gray-300 rounded mt-2"></span>
          </p>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div className="flex flex-col mx-2">
                <div className="h-4 w-20 bg-gray-300 rounded mb-1"></div>
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="h-3 w-24 bg-gray-300 rounded"></span>

              <span className="h-3 w-24 bg-gray-300 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
