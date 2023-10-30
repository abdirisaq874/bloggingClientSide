import React from 'react';
import {
  FaCogs,
  FaGraduationCap,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

import { MdOutgoingMail } from 'react-icons/md';

const Member = ({ member }) => {
  return (
    <div className="card w-96 sm:w-72 bg-base-100 shadow-xl transform transition-transform hover:-translate-y-2 duration-700 hover:cursor-pointer">
      <figure>
        <img src={member.ProfileImage} alt={member.Name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{member.Name}</h2>
        <div className="flex items-center gap-2">
          <FaCogs className="text-gray-400" />
          <p className="text-gray-400"> {member.titleATOrbiba} </p>
        </div>
        <div className="flex items-center gap-2">
          <FaGraduationCap className="text-gray-400" />
          <p className="text-gray-400"> {member.title} </p>
        </div>
        {/* social media section */}
        <div className="flex items-center justify-around gap-3 my-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/-0b1b3a1b0/"
            className="icon-link transform transition-transform hover:translate-y-[-2px]"
          >
            <FaLinkedin className="text-[#0072b1]" size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/zm.3/"
            className="icon-link transform transition-transform hover:translate-y-[-2px]"
          >
            <FaFacebook className="text-[#4267B2]" size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/zeum/"
            className="icon-link transform transition-transform hover:translate-y-[-2px]"
          >
            <FaInstagram className="text-[#C13584]" size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:abcd@instagram.com"
            className="icon-link transform transition-transform hover:translate-y-[-2px]"
          >
            <MdOutgoingMail className="text-[#ea4335]" size={20} />
          </a>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary-content w-full h-9 text-xs p-0">
            Learn More ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Member;
