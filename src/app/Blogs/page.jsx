import React from 'react';
import Blogs from './Blogs';

export const metadata = {
  title: 'Blogs',
  description: 'Blogs',
  image: 'https://orbiba.com/images/logo.png',
  url: 'https://orbiba.com/blog',
  keywords: 'Blogs',
  authors: 'Orbiba',
};

const page = () => {
  return <Blogs />;
};

export default page;
