import React, { useEffect, useState } from 'react';
import {
  FaHome, FaUser, FaGraduationCap, FaLaptopCode,
  FaBriefcase, FaProjectDiagram, FaFileAlt
} from 'react-icons/fa';

function FloatingActionButton() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!show || isMobile) return null;

  const sections = [
    { href: '#intro', icon: <FaHome />, color: '#4a1a1a', title: 'Home' },
    { href: '#about', icon: <FaUser />, color: '#4a1a1a', title: 'About' },
    { href: '#experience', icon: <FaBriefcase />, color: '#4a1a1a', title: 'Experience' },
    { href: '#skills', icon: <FaLaptopCode />, color: '#4a1a1a', title: 'Skills' },
    { href: '#projects', icon: <FaProjectDiagram />, color: '#4a1a1a', title: 'Projects' },
    { href: '#resume', icon: <FaFileAlt />, color: '#4a1a1a', title: 'Resume' },
  ];

  return (
    <div style={fabContainerStyle}>
      {sections.map(({ href, icon, color, title }, i) => (
        <a
          key={i}
          href={href}
          title={title}
          style={{
            ...fabButtonStyle,
            backgroundColor: color,
          }}
        >
          {React.cloneElement(icon, { color: 'white', size: 20 })}
        </a>
      ))}
    </div>
  );
}

const fabContainerStyle = {
  position: 'fixed',
  bottom: '100px',
  right: '20px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const fabButtonStyle = {
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  transition: 'transform 0.2s',
  textDecoration: 'none',
};

export default FloatingActionButton;
