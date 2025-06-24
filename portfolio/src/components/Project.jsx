import React from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
    const projectList = [
    {
      title: 'Crowdfunding Platform (WIP)',
      image: 'https://via.placeholder.com/400x200?text=Crowdfunding',
      description: ' A modern crowdfunding platform where dreamers launch campaigns and supporters bring them to life. Users can start, browse, and support campaigns. Built using the MERN stack. Currently a work in progress.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Murugasutha/project-crowdfund',
      live: null
    },
    {
      title: 'Doemart Directory',
      image: 'https://via.placeholder.com/400x200?text=Doemart',
      description: 'DoEmart is an online business directory platform designed to help users find and list businesses with ease. The platform aims to bridge the gap between local businesses and potential customers.',
      techStack: ['HTML', 'CSS', 'Bootstrap', 'Python'],
      github: 'https://github.com/Murugasutha/doemart',
      live: null
    },
    {
      title: 'FitnessKit',
      image: 'https://via.placeholder.com/400x200?text=Doemart',
      description: 'A simple, responsive mini web app built to help users track and manage basic fitness metrics like BMI, daily calorie needs, hydration, and step goals.',
      techStack: ['HTML',  'Bootstrap', 'PicoCSS', 'JavaScript'],
      github: 'https://github.com/Murugasutha/FitnessKit',
      live: 'https://murugasutha.github.io/FitnessKit/'
    },
    {
      title: 'Paisa Planner',
      image: 'https://via.placeholder.com/400x200?text=Doemart',
      description: 'Paise Planner is a lightweight money management toolkit. It contains 4 bite-sized tools to help with everyday money decisions – no signup, no fuss, just instant answers!',
      techStack: ['HTML', 'PicoCSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Murugasutha/paisaPlanner',
      live: 'https://murugasutha.github.io/paisaPlanner/'
    },
    {
      title: 'TourneyHub-API',
      image: 'https://via.placeholder.com/400x200?text=Doemart',
      description: 'TourneyHub API is a RESTful backend built. It manages games and tournaments efficiently by offering CRUD operations, tournament creation, and player registration in a scalable and developer-friendly structure.',
      techStack: ['Node.js', 'Express.js', 'Sequelize', 'SQLite'],
      github: 'https://github.com/Murugasutha/TourneyHub-API',
      live: null
    },
    {
      title: 'Fork-and-Code-API',
      image: 'https://via.placeholder.com/400x200?text=Doemart',
      description: 'A RESTful API built with Express.js and SQLite to manage restaurants and dishes. Perfect for learning full-stack basics, testing frontend apps, or building your own food-related platform.',
      techStack: ['Node.js', 'Express.js', 'Sequelize', 'SQLite'],
      github: 'https://github.com/Murugasutha/fork-and-code',
      live: null
    },
  ];

    return ( 
        <>
            <section id="projects" className='d-flex align-items-center min-vh-100'>
                <Container>
                    <h1 className='display-4 maroon mb-5 mt-5 text-center ' data-aos="fade-down">
                            <span className='education-title'>My Projects</span>
                        </h1>
                    <Row className='g-2 mb-5'>
                        {projectList.map((project, index) => (
                            <Col key={index} md={4} sm={6} xs={12} >
                                <div data-aos="fade-up" >
                                    <Card className='h-100 p-1 border-0 rounded-circle education-card' data-aos-duration={1200 + index} style={{background: '#f0d3d3'}}> 
                                        <CardBody className='maroon'>
                                            <CardTitle className='fw-bold'>{project.title}</CardTitle>
                                            <CardText >{project.description}</CardText>
                                            <div className='mb-3'>
                                                {project.techStack.map((tech, index) => (
                                                    <Badge key={index} bg='light'  className='me-1 light-maroon'>{tech}</Badge>
                                                ))}
                                            </div>
                                        </CardBody>
                                        <CardFooter className='border-0 bg-transparent'>
                                                <div className="mt-auto d-flex gap-2">
                                                {project.github && (
                                                    <Button variant='dark' href={project.github} target='_blank' size='sm'>
                                                        <FaGithub className="me-1" /> GitHub
                                                    </Button>
                                                )}

                                                {project.live && (
                                                    <Button variant='primary' href={project.live} target='_blank' size='sm'>
                                                        <FaExternalLinkAlt  className="me-1" /> Live
                                                    </Button>
                                                )}
                                            </div>
                                            </CardFooter>
                                    </Card>
                                </div>
                            </Col>
                        )) }
                    </Row>
                </Container>
            </section>
        </>
     );
}

export default Projects;