import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8">
      <a href="https://github.com/Binwin6724" className="text-[#ccd6f6] hover:text-[#64ffda] hover:-translate-y-1 duration-300">
        <FaLinkedin size={30} />
      </a>
      <a href="https://in.linkedin.com/in/binwin-viju-7299a917b" className="text-[#ccd6f6] hover:text-[#64ffda] hover:-translate-y-1 duration-300">
        <FaGithub size={30} />
      </a>
      <a href="https://twitter.com/BinwiN4" className="text-[#ccd6f6] hover:text-[#64ffda] hover:-translate-y-1 duration-300">
        <FaTwitter size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
