import React from 'react';
import { Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle,Row, Col, Container } from 'react-bootstrap';
import experienceImg from '../assets/experience.png'

function Experience() {
    const experienceData = [
        {
            title: "SDE Intern",
            subtitle: "NeoG Camp, Remote",
            date: "April 2025 - Present",
            description: `Contributing to real-world web development projects while mentoring juniors in frontend fundamentals. Demonstrated leadership in code reviews and team collaboration.`,
            skills: "HTML, CSS, JS, Bootstrap, Vanilla JS, Leadership, Mentoring"
        },
        {
            title: "Backend Developer Trainee",
            subtitle: "Invact, Remote",
            date: "Jan 2024 - April 2024",
            description: `Built and tested RESTful APIs using Express.js and Sequelize. Worked on SQLite-based backend services, and practiced API integration using Postman.`,
            skills: "Express.js, Sequelize, Sqlite3, REST APIs, Postman"
        },
        {
            title: "Full Stack Developer Intern",
            subtitle: "Techvolt Software, Coimbatore",
            date: "Nov 2023 - March 2024",
            description: `Developed ‘Doemart’ — a business directory web app from scratch using Python-based full stack. Designed frontend and implemented CRUD with MySQL integration.`,
            skills: "HTML, CSS, JS, Bootstrap, Python, MySQL"
        }
    ];

    return (
        <section id="experience" className=" py-5">
            <Container>
                <h1 className="display-4 maroon mb-5 mt-5 text-end" data-aos="fade-left">
                    <span className="experience-title">Professional Experience</span>
                </h1>
                <Row>
                    <Col md={6} data-aos="fade-right" >
                        <img src={experienceImg} 
                        alt="Experience illustration" 
                        className='img-fluid rounded'
                        loading='lazy'
                        style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                        }}
                        />
                    </Col>
                    <Col md={6}>
                        <div className="timeline-container">
                            {experienceData.map((exp, index) => (
                                <div key={index} className='timeline-item' data-aos="fade-up" data-aos-duration={1200 + index}>
                                    <Card className="border-1" bg="transparent">
                                        <CardBody>
                                            <CardTitle className="fw-bold maroon">{exp.title}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">{exp.subtitle}</CardSubtitle>
                                            <CardText>
                                                {exp.description} <br /><br />
                                                <strong>Skills:</strong> {exp.skills}
                                            </CardText>
                                        </CardBody>
                                        <CardFooter className="border-0 bg-transparent">{exp.date}</CardFooter>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;
