import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function BlogsLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
