import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = ({layout}) => {
  const renderIcons = () => {
    if (layout === 'columns') {
      return (
        <div className="social-media pt-20">
          <a href="https://github.com/anita00001">
            <FaGithub className="text-color3 text-2xl mb-4" />
          </a>
          <a href="https://www.linkedin.com/in/anitaa-sharmaa/">
            <FaLinkedin className="text-color3 text-2xl mb-4" />
          </a>
          <a href="https://x.com/anitaa_sharmaa">
            <FaTwitter className="text-color3 text-2xl mb-4" />
          </a>
          <a href="https://www.facebook.com/anita.sharma00001">
            <FaFacebook className="text-color3 text-2xl mb-4" />
          </a>
          <a href="https://www.instagram.com/_instanu/">
            <FaInstagram className="text-color3 text-2xl mb-4" />
          </a>
        </div>
      );
    } else if (layout === 'rows') {
      return (
        <div className="social-media flex justify-center gap-4 pt-8">
          <a href="https://github.com/anita00001">
            <FaGithub className="text-color3 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/anitaa-sharmaa/">
            <FaLinkedin className="text-color3 text-2xl" />
          </a>
          <a href="https://x.com/anitaa_sharmaa">
            <FaTwitter className="text-color3 text-2xl" />
          </a>
          <a href="https://www.facebook.com/anita.sharma00001">
            <FaFacebook className="text-color3 text-2xl" />
          </a>
          <a href="https://www.instagram.com/_instanu/">
            <FaInstagram className="text-color3 text-2xl" />
          </a>
        </div>
      );
    }
  };
  return <div className="social-media">{renderIcons()}</div>;
};

export default SocialMedia;
