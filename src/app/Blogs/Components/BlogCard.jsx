'use client';
import React, { useEffect, useState } from 'react';
import Ticker from 'framer-motion-ticker';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const timeAgo = (timestamp) => {
  const now = new Date();
  const commentTime = new Date(timestamp);
  const diff = now - commentTime;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) {
    return 'just now';
  } else if (diff < hour) {
    const minutesAgo = Math.floor(diff / minute);
    return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
  } else if (diff < day && now.getDate() === commentTime.getDate()) {
    const hoursAgo = Math.floor(diff / hour);
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else if (diff < day * 2 && now.getDate() - 1 === commentTime.getDate()) {
    return 'yesterday';
  } else {
    // Modify this part as per your desired date format
    return commentTime.toDateString();
  }
};

const BlogCard = ({ blog }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const maxCharacters = 100; // Set your desired character limit
  const [timesAgo, setTimesAgo] = useState(timeAgo(blog.createdAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimesAgo(timeAgo(blog.createdAt));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const description = isExpanded
    ? blog.description
    : blog.description.slice(0, maxCharacters);

  return (
    <>
      <div
        className="card w-80  bg-base-100 shadow-xl transform transition-transform hover:-translate-y-2 duration-700 hover:cursor-pointer"
        onClick={() => router.push(`/Blogs/${blog.slug}`)}
      >
        <figure>
          <img src={blog.thumbnailUrl} alt={blog.title} />
        </figure>
        <div className="card-body">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase text-primary">
              <Animate
                items={blog.tags}
                durationinSeconds={blog.tags.length * 6}
              />
            </span>
            <div className="card-title" tabindex="0">
              {blog.title}
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {isExpanded ? (
                { description }
              ) : (
                <>
                  {description} ...
                  <span className="text-primary cursor-pointer">
                    <Link href={`/Blogs/${blog.slug}`}>Read more</Link>
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={blog.employee.user.avator}
                  alt={blog.employee.user.name}
                />
                <div className="flex flex-col mx-2">
                  <a
                    href="#"
                    className=" font-semibold text-gray-700 dark:text-gray-200"
                    tabindex="0"
                    role="link"
                  >
                    {blog.employee.user.name}
                  </a>
                  <div className="text-xs text-gray-600 dark:text-gray-300">
                    {blog.employee.titleAtOrbiba}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xs">published on</p>
                <span className="mx-1 text-xs text-gray-600 ">{timesAgo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Animate({ items, durationinSeconds }) {
  return (
    <Ticker duration={durationinSeconds}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            width: '200px',
          }}
        >
          {item}
        </div>
      ))}
    </Ticker>
  );
}

export default BlogCard;
