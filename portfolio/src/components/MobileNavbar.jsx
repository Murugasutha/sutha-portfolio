import React from "react";
import { FaHome, FaUser, FaBook, FaTools, FaProjectDiagram, FaBriefcase  } from "react-icons/fa";

const MobileNavbar = () => {
  return (
    <div className="mobile-navbar d-md-none">
      <a href="#intro" className="mobile-nav-link"><FaHome /></a>
      <a href="#about" className="mobile-nav-link"><FaUser /></a>
      <a href="#education" className="mobile-nav-link"><FaBook /></a>
      <a href="#skills" className="mobile-nav-link"><FaTools /></a>
      <a href="#experience" className="mobile-nav-link"><FaBriefcase /></a>
      <a href="#projects" className="mobile-nav-link"><FaProjectDiagram /></a>
    </div>
  );
};

export default MobileNavbar;
