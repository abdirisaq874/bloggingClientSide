'use client';
import React, { useEffect, useState } from 'react';
import Comments from '../Components/Comments';
import FeedBackButtons from '../Components/FeedBackButtons';
import SingleBlog from '../Components/SingleBlog';
import SubscribeSection from '../Components/Subscribe';
import BlogsIntro from '../Components/BlogsIntro';

const Blogs = ({ currentUser, blog, liked }) => {
  return (
    <>
      <BlogsIntro title={blog.title} subFolder={'Blogs'} />
      <div className="container mx-auto gap-4">
        <SingleBlog blog={blog} />
        <FeedBackButtons blog={blog} currentUser={currentUser} liked={liked} />
        <Comments currentUser={currentUser} BlogId={blog._id} />
        <SubscribeSection />
      </div>
    </>
  );
};

export default Blogs;
