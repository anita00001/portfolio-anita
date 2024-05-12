import React from 'react';
import { GrServices } from "react-icons/gr";

const Service = () => {
  return (
    <>
      <div className="about-description p-20">
        <h1 className="about text-4xl font-bold py-10 font-crete text-gradient">
          Services
        </h1>
        
        <div className="services grid grid-cols-5 gap-4">
          <div className="icon col-span-1">
            icon
          </div>
          <div className="service-name col-span-4">
            <h4 className='text-bold'>service name</h4>
            <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero neque in quasi voluptates ratione recusandae sint deleniti velit dicta odio!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
