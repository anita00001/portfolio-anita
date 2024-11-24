// src/routes/Portfolio.js
import React from 'react';
import LineDivider from '../components/LineDivider';
import FeaturedProject from '../components/FeaturedProject';
import PortfolioProject from '../components/PortfolioProject';

const Portfolio = () => {
  return (
    <>
      {/* <div id="featured-project" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20"> */}
        <div className="featured-photo"><FeaturedProject /></div>
      {/* </div> */}
      <div id="portfolio-projects" className="min-h-screen bg-color4 px-20 py-10">
        <PortfolioProject />
      </div>
      <LineDivider />
    </>
  );
};

export default Portfolio;
