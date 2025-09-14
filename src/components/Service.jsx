import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIconByKey } from '../utils/iconMap';

const Service = () => {
  const serviceList = useSelector((state) => state.service.service);

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedServiceId, setExpandedServiceId] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const initialServicesToShow = 4;

  const filteredServices = serviceList.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleServices = showAllServices ? filteredServices : filteredServices.slice(0, initialServicesToShow);

  const toggleShowAllServices = () => setShowAllServices((prev) => !prev);

  const handleServiceClick = (id) => {
    setExpandedServiceId(id === expandedServiceId ? null : id);
  };

  return (
    <>
      <div className="about-service p-20">
        <h1 className="service text-4xl font-bold py-10 font-crete text-gradient">
          Services
        </h1>

        <div className="search-bar mb-4">
          <input
            type="text"
            placeholder="Search Services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-color2 rounded-lg focus:outline-none focus:border-color1"
          />
        </div>

        <div className='service-list'>
          {visibleServices.map((service) => {
            const Icon = getIconByKey(service.icon);
            return (
              <div
                className="services grid grid-cols-5 gap-4 p-4 mb-4 border border-color2 bg-color1 hover:bg-color6 hover:border-color1"
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="icon col-span-1 border border-color2 flex items-center justify-center h-16">
                  <Icon className="text-3xl" aria-hidden />
                </div>
                <div className="service-name col-span-4">
                  <h4 className='text-bold'>{service.name}</h4>
                  <p className={`text-justify ${expandedServiceId === service.id ? '' : 'line-clamp-1'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {showAllServices ? (
          <button
            className="text-xl mt-4 p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white"
            onClick={toggleShowAllServices}
          >
            See Less Services
          </button>
        ) : (
          <button
            className="text-xl mt-4 p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white"
            onClick={toggleShowAllServices}
          >
            See More Services
          </button>
        )}
      </div>
    </>
  );
};

export default Service;
