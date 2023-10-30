import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-primary bg-opacity-30 text-base-content">
        <aside className="flex flex-col gap-5">
          <Image
            src="https://orbibarobotics.com/static/images/logo.png"
            alt="logo"
            className="w-40"
            width={200}
            height={190}
          />
          <p>
            Orbiba Robotics.
            <br />
            Innovation in agriculture with Orbiba Robotics. <br />
            Join this journey we started and Contribute to innovation.
          </p>
          <div className="grid grid-flow-col gap-4 w-full">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/orbibarobotics/"
              className="icon-link transform transition-transform hover:translate-y-[-2px]"
            >
              <FaLinkedin className="text-[#0072b1]" size={20} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/orbibarobotics"
              className="icon-link transform transition-transform hover:translate-y-[-2px]"
            >
              <FaFacebook className="text-[#4267B2]" size={20} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/orbibarobotics/"
              className="icon-link transform transition-transform hover:translate-y-[-2px]"
            >
              <FaInstagram className="text-[#C13584]" size={20} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:info@orbibarobotics.com"
              className="icon-link transform transition-transform hover:translate-y-[-2px]"
            >
              <MdOutgoingMail className="text-[#ea4335]" size={20} />
            </a>
          </div>
        </aside>

        <nav>
          <header className="footer-title">Services</header>
          <a href="/" className="link link-hover">
            OCR
          </a>
          <a href="/" className="link link-hover">
            Orbite
          </a>
          <a href="/" className="link link-hover">
            Orbyhobby
          </a>
          <a href="/" className="link link-hover">
            orbiba
          </a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a href="/" className="link link-hover">
            About us
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
          <div className="flex gapx-2">
            <a href="/" className="link link-hover">
              Careers
            </a>
            <span className="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">
              We&rsquo;re hiring
            </span>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Blogs</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </nav>
      </footer>
      <footer className="footer footer-center p-4  bg-primary-content bg-opacity-40">
        <aside>
          <p>Copyright © 2023 - All right reserved by Orbiba Robotics Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
