import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GrServices } from "react-icons/gr";

const Service = () => {
  const serviceList = useSelector((state) => state.service.service);
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const handleServiceClick = (id) => {
    setExpandedServiceId(id === expandedServiceId ? null : id);
  };

  return (
    <>
      <div className="about-service p-20">
        <h1 className="service text-4xl font-bold py-10 font-crete text-gradient">
          Services
        </h1>
        <div className='service-list'>
          {serviceList.map((service) => (
            <div
            className="services grid grid-cols-5 gap-4 p-4 mb-4 border border-color2 bg-color1 hover:bg-color6 hover:border-color1"
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            >
              <div
                className="icon col-span-1 border border-color2 flex items-center justify-center h-16"
              >
                < GrServices />
              </div>
              <div className="service-name col-span-4">
                <h4 className='text-bold'>{service.name}</h4>
                <p
                  className={`text-justify ${expandedServiceId === service.id ? '' : 'line-clamp-1'}`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
