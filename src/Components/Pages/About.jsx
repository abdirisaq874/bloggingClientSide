import React from 'react';
import Header from './../Header';
import BubblesComponents from './../BubblesComponents';
import CategoryMembers from './../Members';
import AboutHero from './../AboutHero';
import Footer from './../Footer';
import FAQ from './../FAQ';

const About = () => {
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 z-50 pointer-events-none">
        <BubblesComponents times={10} />
      </div>

      <Header />

      <div className="h-72 w-full bg-primary-content bg-opacity-40 flex items-center">
        <div className="container mx-auto px-4 flex flex-col gap-2">
          <h1 className="text-3xl font font-bold text-primary">About US</h1>
          <div className="text-lg breadcrumbs text-secondary">
            <ul>
              <li>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  About
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                About us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AboutHero />

      <div className="container mx-auto px-4">
        <CategoryMembers />
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default About;
