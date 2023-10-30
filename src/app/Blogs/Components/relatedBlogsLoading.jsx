import React from 'react';

const RelatedBlogsLoading = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <div key={index} className="animate-pulse mb-4">
      <div className="group flex items-center gap-x-6">
        <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
          <div className="w-full h-full bg-gray-200 rounded-lg"></div>
        </div>
        <div className="grow">
          <div className="w-36 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  ));
};

export default RelatedBlogsLoading;
