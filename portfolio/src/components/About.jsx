import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap';
import { FaCode, FaLightbulb, FaHeart } from 'react-icons/fa';

function About() {
    return ( 
        <>
            <section id="about" className='py-5'>
                <Container>
                    <h1 className='display-5 maroon mb-5 mt-5 text-center ' data-aos="fade-down">
                        <span className='education-title'>About Me</span>
                    </h1>

                    <Row className='g-2' data-aos="zoom-in">
                        <Col md={12} className='mt-4' data-aos="fade-down">
                            <p className='text-muted lead light-maroon text-center'>
                                 A passionate Full Stack Developer with a background in Computer Applications and a curiosity that never stops growing. I bridge the gap between ideas and execution by building web applications that are fast, functional, and user-focused.
                            </p>
                        </Col>
                        <Col md={4} className='mt-5'>
                        <Card className='border-1 bg-transparent about-card'>
                            <CardBody className='d-flex align-items-start'>
                                <div className='me-3 mt-1 icon-hover'>
                                    <FaCode size={28} className='maroon' />
                                </div>
                                <div>
                                    <CardTitle className='fw-bold maroon'>What I Do</CardTitle>
                                    <CardText>
                                        From frontend finesse to backend brains, I build scalable, responsive, and engaging web apps.
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={4} className='mt-5'>
                        <Card className='border-1 bg-transparent about-card'>
                            <CardBody className='d-flex align-items-start'>
                                <div className='me-3 mt-1 icon-hover'>
                                    <FaLightbulb size={28} className='maroon' />
                                </div>
                                <div>
                                    <CardTitle className='fw-bold maroon'>What I Believe</CardTitle>
                                    <CardText>
                                        Simplicity wins <br />
                                        Learning never ends <br />
                                        Consistency is a key <br />
                                        Clean code is kind code
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={4} className='mt-5'>
                        <Card className='border-1 bg-transparent about-card'>
                            <CardBody className='d-flex align-items-start'>
                                <div className='me-3 mt-1 icon-hover'>
                                    <FaHeart size={28} className='maroon' />
                                </div>
                                <div>
                                    <CardTitle className='fw-bold maroon'>Beyond the Code</CardTitle>
                                    <CardSubtitle className='mb-2 small text-muted'>When I log off, you’ll find me:</CardSubtitle>
                                    <CardText>
                                        Sketching something <br />
                                        Smashing shuttlecocks <br />
                                        Reading stories that inspire
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </section>
        </>
     );
}

export default About;