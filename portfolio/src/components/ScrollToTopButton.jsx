import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleScroll(); // trigger once
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible || !isMobile) return null;

  return (
    <button
      title="Back to Top"
      onClick={scrollToTop}
      style={scrollBtnStyle}
    >
      <FaArrowUp color="#fff" size={18} />
    </button>
  );
}

const scrollBtnStyle = {
  position: 'fixed',
  bottom: '80px',
  right: '20px',
  width: '44px',
  height: '44px',
  backgroundColor: '#4a1a1a',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 1000,
  transition: 'transform 0.3s',
};

export default ScrollToTopButton;
