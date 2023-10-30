'use client';
import { useFetchLatestBlogsQuery } from '@/store';
import BlogCard from './Components/BlogCard';
import CardLoader from './Components/BlogCardLoader';
import BlogsIntro from './Components/BlogsIntro';

const Blogs = () => {
  const { data, isFetching, error } = useFetchLatestBlogsQuery();
  if (error) return <div>error</div>;
  return (
    <>
      <BlogsIntro subFolder="Blogs" />
      <div className="container mx-auto my-10">
        <div className="flex justify-between border-b my-4 py-4 items-end">
          <span className="font-bold text-xl">Latest Blogs</span>
          <span className="btn btn-primary p-2 min-h-6 h-10">View All</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isFetching
            ? [1, 2, 3].map((n) => <CardLoader key={n} />)
            : data.blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </>
  );
};

export default Blogs;
