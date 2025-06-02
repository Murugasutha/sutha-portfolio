import React from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs,
  FaPython, FaGitAlt, FaGithub, FaSpotify,
} from 'react-icons/fa';
import { SiExpress, SiMysql, SiPostman, SiMongodb} from 'react-icons/si';
import { SiDjango } from 'react-icons/si';


function Skills() {
  const iconSize = 40;

  const frontend = [
    <FaHtml5 color="#E44D26" size={iconSize} />,
    <FaCss3Alt color="#1572B6" size={iconSize} />,
    <FaJs color="#F7DF1E" size={iconSize} />,
    <FaReact color="#61DAFB" size={iconSize} />,
    <FaBootstrap color="#7952B3" size={iconSize} />
  ];

  const backend = [
    <FaNodeJs color="#339933" size={iconSize} />,
    <SiExpress color="#000" size={iconSize} />,
    <SiMongodb color="#47A248" size={iconSize} />,
    <FaPython color="#306998" size={iconSize} />,
    <SiMysql color="#4479A1" size={iconSize} />,
    <SiDjango color="#092E20" size={iconSize} />

  ];

  const tools = [
    <FaGitAlt color="#F05032" size={iconSize} />,
    <FaGithub color="#000" size={iconSize} />,
    <SiPostman color="#FF6C37" size={iconSize} />,
    <FaSpotify color="#1DB954" size={iconSize} />,

  ];

  const renderGrid = (icons) => (
    <div className="d-grid gap-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {icons.map((icon, i) => (
        <div key={i} className="text-center icon-link p-2">
          {icon}
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className='d-flex align-items-center min-vh-100'>
      <Container>
        <h1 className='display-4 maroon mb-5 mt-5 text-start' data-aos="fade-right">
          <span className='education-title'>Technical Skills</span>
        </h1>
        <Row className='g-3 my-5'>
          <Col md={4} data-aos="fade-left">
            <Card className="border-0 p-4 text-center skill-card" bg="light">
                <CardTitle className="fw-bold maroon">FrontEnd</CardTitle>
                <CardBody>
                    {renderGrid(frontend)}
                </CardBody>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-in">
            <Card className="border-0 p-4 text-center skill-card" bg="light">
                <CardTitle className="fw-bold maroon">Backend</CardTitle>
                <CardBody>
                    {renderGrid(backend)}
                </CardBody>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-right">
            <Card className="border-0 p-4 text-center skill-card" bg="light">
                <CardTitle className="fw-bold maroon">Tools & Platforms</CardTitle>
                <CardBody>
                    {renderGrid(tools)}
                </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
