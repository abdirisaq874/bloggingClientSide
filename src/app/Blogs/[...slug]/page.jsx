import React from 'react';
import { cookies } from 'next/headers';
import axios from 'axios';
import Blogs from './Blog';

const FechtCurrentUser = async () => {
  try {
    const currentUser = await axios.get(
      'http://localhost:4000/api/v1/users/showMe',
      {
        headers: { Cookie: cookies().toString() },
      }
    );
    return currentUser.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchSingleBlog = async (slug) => {
  try {
    const blog = await axios.get(`http://localhost:4000/api/v1/blogs/${slug}`, {
      headers: { Cookie: cookies().toString() },
    });
    return blog.data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({ params }) => {
  const currentUserData = FechtCurrentUser();
  const blogData = fetchSingleBlog(params.slug);
  const [currentUser, blog] = await Promise.all([currentUserData, blogData]);
  let liked = false;
  if (currentUser && currentUser.user) {
    liked = blog.blog.likes.includes(currentUser.user.userId);
  }
  return <Blogs currentUser={currentUser} blog={blog.blog} liked={liked} />;
};

export async function generateMetadata({ params, searchParams }, parent) {
  const blogData = await fetchSingleBlog(params.slug);
  const blog = blogData.blog;
  return {
    title: blog.title,
    description: blog.description,
    image: blog.employee.user.avator,
    url: `https://orbiba.com/blog/${blog.slug}`,
    keywords: blog.keywords,
    authors: blog.employee.user.name,
  };
}

export default Page;
