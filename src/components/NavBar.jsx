import React from 'react';
import { Link as ScrollLink } from "react-scroll";
const RESUME_URL = "https://drive.google.com/file/d/1VmqvulUBSLKhtGdVpehYEd2x-kMjo_fX/view?usp=sharing";

const NavBar = () => {
  return (
    <nav className="navbar bg-color1 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white font-bold text-2xl"
          activeClass="active-logo"
        >
          Anita Sharma
        </ScrollLink>
        <div className="flex space-x-10 text-xl">
          <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-white">
            Home
          </ScrollLink>
          <ScrollLink to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="text-white">
            Portfolio
          </ScrollLink>
          <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-white">
            About
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-white">
            Contact
          </ScrollLink>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="text-white"
            aria-label="Open my resume in Google Drive"
          >Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
