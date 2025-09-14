import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIconByKey } from '../utils/iconMap';

const Experience = () => {
  const experienceList = useSelector((state) => state.experience.experience);
  const [expandedExperienceId, setExpandedExperienceId] = useState(null);

  const handleExperienceClick = (id) => {
    setExpandedExperienceId(id === expandedExperienceId ? null : id);
  };

  return (
    <>
      <div className="about-experience p-20">
        <h1 className="experience text-4xl font-bold py-10 font-crete text-gradient">
          Experience
        </h1>

        <div className="experience-list">
          {experienceList.map((experience) => {
            const Icon = getIconByKey(experience.icon);
            return (
              <div
                className="experiences grid grid-cols-5 gap-4 p-4 mb-4 border border-color2 bg-color1 hover:bg-color6 hover:border-color1"
                key={experience.id}
                onClick={() => handleExperienceClick(experience.id)}
              >
                <div className="icon col-span-1 flex items-center justify-center h-16">
                  <Icon className="text-3xl" aria-hidden />
                </div>
                <div className="experience-name col-span-4">
                  <h4 className="text-bold">
                    {experience.name} <span>({experience.organization})</span>
                  </h4>
                  <ul
                    className={`text-justify ${
                      expandedExperienceId === experience.id ? '' : 'line-clamp-1'
                    }`}
                  >
                    {experience.role
                      .split(',')
                      .map((role) => role.trim())
                      .filter(Boolean)                 // avoid empty bullets
                      .map((role, index) => (
                        <li key={index}>{'\u2022'} {role}</li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
