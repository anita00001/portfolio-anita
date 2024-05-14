import React from 'react';
import ContactMessage from '../components/ContactMessage';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20">
      <div className="contact-message">< ContactMessage /></div>
      <div className="contact-form">< ContactForm /></div>
    </div>
  );
};

export default Contact;