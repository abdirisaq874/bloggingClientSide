import React, { useEffect, useState } from 'react';

import RelatedBlogs from './relatedBlogs';
import BlogsIntro from './BlogsIntro';
const SingleBlog = ({ blog }) => {
  const [timeAgo, setTimeAgo] = useState('');
  const timestamp = blog.createdAt;

  useEffect(() => {
    const updateAgoTime = () => {
      const currentDate = new Date();
      const eventDate = new Date(timestamp);
      const timeDifference = currentDate - eventDate;

      if (timeDifference < 60000) {
        setTimeAgo('just now');
      } else if (timeDifference < 3600000) {
        const minutes = Math.floor(timeDifference / 60000);
        setTimeAgo(`${minutes} minute${minutes !== 1 ? 's' : ''} ago`);
      } else if (timeDifference < 86400000) {
        const hours = Math.floor(timeDifference / 3600000);
        setTimeAgo(`${hours} hour${hours !== 1 ? 's' : ''} ago`);
      } else if (timeDifference < 172800000) {
        setTimeAgo('yesterday');
      } else {
        setTimeAgo(eventDate.toDateString());
      }
    };

    updateAgoTime();

    // Update the timeAgo value every minute
    const intervalId = setInterval(updateAgoTime, 60000);

    return () => clearInterval(intervalId);
  }, [timestamp]);

  return (
    // {/* single Blog */}
    <div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6 px-4 sm:px-6 lg:px-8">
      {/*  Blog  header And conten*/}
      <div className="lg:col-span-3">
        {/* Blog Header */}
        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3 mb-6">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src={blog.employee.user.avator}
              alt={blog.employee.user.name}
            />
          </div>

          <div className="grow ">
            <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
              <div>
                <div className="group relative">
                  <div className="sm:mb-1 block text-left cursor-pointer">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {blog.employee.user.name}
                    </span>

                    <div className="group-hover:opacity-100 group-hover:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl w-[280px] left-0 top-6">
                      <div className="p-4 sm:p-5">
                        <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={blog.employee.user.avator}
                              alt={blog.employee.user.name}
                            />
                          </div>

                          <div
                            className="
                            grow flex flex-col justify-between items-start"
                          >
                            <p className="text-lg font-semibold text-gray-200">
                              {blog.employee.user.name}
                            </p>
                            <span className="text-xs text-gray-400">
                              {blog.employee.titleAtOrbiba}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-400">
                          {blog.employee.description}
                        </p>
                      </div>

                      <div className=" px-4 py-3 sm:px-5">
                        <ul className="flex justify-around items-center text-xs space-x-3">
                          <li className="inline-block">
                            <span className="font-semibold text-gray-200 mx-1">
                              {blog.articles}
                            </span>
                            <span className="text-gray-400">articles</span>
                          </li>
                          <li className="inline-block">
                            <span className="font-semibold text-gray-200 mx-1">
                              {blog.followers}
                            </span>
                            <span className="text-gray-400">likes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="text-xs text-gray-500">
                  <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                    {timeAgo}
                  </li>
                  <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                    {blog.minutesToread} min read
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  className="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Bloge Content */}
        <div className="space-y-5 md:space-y-8 leading-8">
          <div className="prose dark:prose-dark max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            <br />
            <br />
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="m-1 mt-5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Related Articles Section */}
      <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
        <div className="sticky top-16 left-0 py-8 lg:pl-4">
          <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-2 mb-6 ">
            <h1 className="text-2xl font-bold text-gray-800">
              Related articles
            </h1>
          </div>
          <RelatedBlogs />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
