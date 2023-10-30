// import { Roboto, Open_Sans } from 'next/font/google';

import ReduxProvider from '@/store/Provider';
import './globals.css';
import ToastProvider from './ToastProvider';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import BubblesComponents from '@/Components/BubblesComponents';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '500', '700', '900'],
// });

// const openSans = Open_Sans({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ToastProvider>
            <div className="fixed w-full h-full top-0 left-0 z-50 pointer-events-none">
              <BubblesComponents times={10} />
            </div>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}