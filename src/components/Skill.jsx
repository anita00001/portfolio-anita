import React from 'react';

const Skill = () => {
  return (
    <>
      <div className="about-description p-20">
        <h1 className="about text-4xl font-bold py-10 font-crete text-gradient">
          Skills
        </h1>
        <div className="grid grid-cols-5 gap-4">
          <div className="icon col-span-1">icon</div>
          <div className="skill-name col-span-4">skill name</div>
        </div>
      </div>
    </>
  );
};

export default Skill;
