const relatedBlogArray = [
  {
    title: '5 Reasons to Not start a UX Designer Career in 2022/2023',
    img: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f',
  },
  {
    title:
      'If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result',
    img: 'https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlf',
  },
  {
    title: '7 Principles of Icon Design',
    img: 'https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlf',
  },
];
const RelatedBlogs = () => {
  return (
    <div className="space-y-6">
      {relatedBlogArray.map((blog, index) => {
        return (
          <a key={index} className="group flex items-center gap-x-6" href="#s">
            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                src={blog.img}
                alt="Image1 Description"
              />
            </div>
            <div className="grow">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                {blog.title}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default RelatedBlogs;
