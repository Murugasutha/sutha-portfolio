import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap';
import education1 from '../assets/education2.png'
import education2 from '../assets/education1.png'

function Education() {
    return ( 
        <>
            <section id="education" className='py-5'>
                <Container>
                        <h1 className='display-4 maroon mb-5 mt-5 text-center ' data-aos="fade-down">
                            <span className='education-title'>Education</span>
                        </h1>
                    <Row className='justify-content-center mt-2 g-3'>
                        <Col xs={12} md={5} lg={6} >
                            <div data-aos="fade-up">
                               <div className='d-flex gap-3 align-items-center education-card' >
                                 <img src={education1} 
                                alt="Education 1" 
                                className='img-fluid rounded-start image-hover'
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                                />
                                <Card className='border-0' bg='transparent'>
                                    <CardBody className='p-0'>
                                        <CardTitle className='fw-bold maroon'>Master of Computer Applications (MCA)</CardTitle>
                                        <CardSubtitle className='mb-2 text-muted'>Kongu Arts and Science, Erode</CardSubtitle>
                                        <CardText>
                                            <strong>CGPA: </strong> 8.0 <br />
                                            <strong>Duration: </strong> Sep 2022 - April 2024
                                        </CardText>
                                    </CardBody>
                                </Card>
                               </div>
                            </div>
                        </Col>
                        <Col xs={12} md={5} lg={6} >
                            <div data-aos="fade-up">
                            <div className='d-flex  align-items-center education-card' > 
                                <img src={education2} 
                                alt="Education 2" 
                                className='img-fluid rounded-start image-hover'
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                                />
                                <Card className='border-0' bg='transparent'>
                                    <CardBody className='p-0'>
                                        <CardTitle className='fw-bold maroon'>B.Sc. Computer Science</CardTitle>
                                        <CardSubtitle className='mb-2 text-muted'>Kamaraj College, Thoothukudi</CardSubtitle>
                                        <CardText>
                                            <strong>CGPA: </strong> 8.5 <br />
                                            <strong>Duration: </strong> Jun 2019 - April 2022
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
     );
}

export default Education;