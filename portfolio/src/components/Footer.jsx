import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope  } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center text-lg-start mt-5 border-top text-light" style={{backgroundColor: '#4a1a1a'}}>
      <Container id='contact' className="py-4">
        <Row className="align-items-center text-center g-4">
          <Col md={12} className="mb-3 mb-md-0">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/Murugasutha" target="_blank" rel="noopener noreferrer" className="text-dark fs-4">
                <FaGithub className="footer-icon-link"/>
              </a>
              <a href="https://linkedin.com/in/muruga-sutha-k" target="_blank" rel="noopener noreferrer" className="text-dark fs-4">
                <FaLinkedin className="footer-icon-link"/>
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-dark fs-4">
                <FaTwitter className="footer-icon-link"/>
              </a>
                <a href="mailto:murugasutha18@gmail.com" target="_blank" rel="noopener noreferrer" className="text-dark fs-4">
                <FaEnvelope className="footer-icon-link"/>
              </a>
            </div>
          </Col>

          <Col md={12}>
            <hr className="d-md-none my-3" />
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} Murugasutha | Made with ❤️ using React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
