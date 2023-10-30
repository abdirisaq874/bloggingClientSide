import Header from '@/Components/Header';
import { Footer } from 'flowbite-react';

export const metadata = {
  title: 'Blog posts',
  description: 'Blog posts',
};

export default function blogsLayout({ children }) {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
}
