import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { GrServices } from "react-icons/gr";

const Education = () => {
  const educationList = useSelector((state) => state.education.education);

  const [expandedEducationId, setExpandedEducationId] = useState(null);

  const handleEducationClick = (id) => {
    setExpandedEducationId(id === expandedEducationId ? null : id);
  };

  return (
    <>
      <div className="about-education p-20">
        <h1 className="education text-4xl font-bold py-10 font-crete text-gradient">
          Education
        </h1>

        <div className='education-list'>
          {educationList.map((education) => (
            <div
            className="educations grid grid-cols-5 gap-4 p-4 mb-4 border border-color2 bg-color1 hover:bg-color6 hover:border-color1"
            key={education.id}
            onClick={() => handleEducationClick(education.id)}
            >
              <div
                className="icon col-span-1 border border-color2 flex items-center justify-center h-16"
              >
                < GrServices />
                {/* <h4 className='text-bold'>({education.year})</h4> */}
              </div>
              <div className="education-name col-span-4">
                <h4>({education.year}){' '}{education.name}{' - '}{education.level}</h4>
                <p
                className='text-justify'
                >
                  {education.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
