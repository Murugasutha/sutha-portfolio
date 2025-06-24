import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Resume() {
  return (
    <section id="resume" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} data-aos="fade-right">
            <h2 className="maroon fw-bold mb-3">Resume</h2>
            <p className="lead">
              Download my latest resume to get a detailed view of my education, experience, and technical expertise.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-md-end text-center" data-aos="flip-left">
            <a
              href="https://drive.google.com/file/d/1j5RkhIfK2em_jy9BqybAdhaQfEkrqlJQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark" size="lg" className="px-4 py-2">
                View Resume
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;