import React from 'react';
import ContactMessage from '../components/ContactMessage';
import ContactForm from '../components/ContactForm';
import LineDivider from '../components/LineDivider';
import SocialMedia from '../components/SocialMedia';

const Contact = () => {
  return (
    <>
      <div id="contact" className="min-h-screen bg-color4 px-20">
        <div className=" grid grid-cols-2 gap-4 ">
          <div className="contact-message">< ContactMessage /></div>
          <div className="contact-form">< ContactForm /></div>
        </div>
        < LineDivider />
          < SocialMedia layout="rows"/>
      </div>
    </>
  );
};

export default Contact;