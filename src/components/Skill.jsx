import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { GrServices } from "react-icons/gr";

const Skill = () => {
  const technicalSkillList = useSelector((state) => state.technicalSkill.technicalSkill);

  const [showAllTechnicalSkills, setShowAllTechnicalSkills] = useState(false);
  
  const initialTechnicalSkillsToShow = 4;

  const visibleTechnicalSkills = showAllTechnicalSkills ? technicalSkillList : technicalSkillList.slice(0, initialTechnicalSkillsToShow);

  const toggleShowAllTechnicalSkills = () => {
    setShowAllTechnicalSkills((prevShowAllTechnicalSkills) => !prevShowAllTechnicalSkills);
  };

  // Soft Skills
  const softSkillList = useSelector((state) => state.softSkill.softSkill);

  const [showAllSoftSkills, setShowAllSoftSkills] = useState(false);
  
  const initialSoftSkillsToShow = 4;

  const visibleSoftSkills = showAllSoftSkills ? softSkillList : softSkillList.slice(0, initialSoftSkillsToShow);

  const toggleShowAllSoftSkills = () => {
    setShowAllSoftSkills((prevShowAllSoftSkills) => !prevShowAllSoftSkills);
  };

  return (
    <>
      <div className="about-skill p-20">
        <h1 className="skill text-4xl font-bold py-10 font-crete text-gradient">
          Skills
        </h1>

        <div className="skill-type grid grid-cols-2">

          <div className="technical-skill mr-2">
            <h3 className="font-crete text-xl text-center pb-4">Technical Skills</h3>
            <div className='skill-list'>
          {visibleTechnicalSkills.map((technicalSkill) => (
            <div
            className="skills grid grid-cols-3 gap-4 p-4 my-4 border border-color2 bg-color1 hover:bg-color6 hover:border-color1"
            key={technicalSkill.id}
            >
              <div
                className="icon col-span-1 border border-color2 flex items-center justify-center h-16"
              >
                < GrServices />
              </div>
              <div className="service-name col-span-2">
                <h4 className='text-bold'>{technicalSkill.name}</h4>
              </div>
            </div>
          ))}
        </div>
        {showAllTechnicalSkills ? (
          <button className="text-xl p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white" onClick={toggleShowAllTechnicalSkills}>See Less Skills</button>
        ) : (
          <button className="text-xl p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white" onClick={toggleShowAllTechnicalSkills}>See More Skills</button>
        )}
          </div>

          <div className="soft-skill">
            <h3 className="font-crete text-xl text-center pb-4">Soft Skills</h3>
            <div className='skill-list'>
          {visibleSoftSkills.map((softSkill) => (
            <div
            className="skills grid grid-cols-3 gap-4 p-4 my-4 border border-color2 bg-color1 hover:bg-color6 hover:border-color1"
            key={softSkill.id}
            >
              <div
                className="icon col-span-1 border border-color2 flex items-center justify-center h-16"
              >
                < GrServices />
              </div>
              <div className="service-name col-span-2">
                <h4 className='text-bold'>{softSkill.name}</h4>
              </div>
            </div>
          ))}
        </div>
        {showAllSoftSkills ? (
          <button className="text-xl p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white" onClick={toggleShowAllSoftSkills}>See Less Skills</button>
        ) : (
          <button className="text-xl p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white" onClick={toggleShowAllSoftSkills}>See More Skills</button>
        )}
          </div>
        </div>
     </div>
    </>
  );
};

export default Skill;
