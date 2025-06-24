import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs,
  FaPython, FaGitAlt, FaGithub, FaSpotify,
} from 'react-icons/fa';
import { SiExpress, SiMysql, SiPostman, SiMongodb, SiDjango } from 'react-icons/si';

function Skill() {
  const iconSize = 40;

  const SkillCategory = ({ title, icons, aos }) => (
    <Col xs={12} md={4} className="mb-4">
      <Card className="border-0 p-4 text-center skill-card" bg="light" data-aos={aos}>
        <h5 className="fw-bold maroon mb-3">{title}</h5>
        <Row className="gx-4 gy-3 justify-content-center">
          {icons.map((Icon, index) => (
            <Col key={index} xs={4} sm={3} md={4}>
              <div className="icon-link">{Icon}</div>
            </Col>
          ))}
        </Row>
      </Card>
    </Col>
  );

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
    <FaSpotify color="#1DB954" size={iconSize} />
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h1 className="display-4 maroon mb-5 mt-5 text-start" data-aos="fade-right">
          <span className="education-title">Technical Skills</span>
        </h1>
        <Row>
          <SkillCategory title="FrontEnd" icons={frontend} aos="fade-down" />
          <SkillCategory title="Backend" icons={backend} aos="fade-up" />
          <SkillCategory title="Tools & Platforms" icons={tools} aos="fade-down" />
        </Row>
      </Container>
    </section>
  );
}

export default Skill;
