import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="social-media pt-20">
      <a href="https://github.com/anita00001">
        <FaGithub className="text-color3 text-2xl mb-4" />
      </a>
      <a href="https://www.linkedin.com/in/anitaa-sharmaa/">
        <FaLinkedin className="text-color3 text-2xl mb-4" />
      </a>
      <a href="https://twitter.com">
        <FaTwitter className="text-color3 text-2xl mb-4" />
      </a>
      <a href="https://www.facebook.com/anita.sharma00001">
        <FaFacebook className="text-color3 text-2xl mb-4" />
      </a>
      <a href="https://www.instagram.com/paudel_anita">
        <FaInstagram className="text-color3 text-2xl mb-4" />
      </a>
    </div>
  );
};

export default SocialMedia;
