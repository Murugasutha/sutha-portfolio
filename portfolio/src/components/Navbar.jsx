import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent(){
    return(
            
                <Navbar bg="transparent" className="d-none d-lg-flex"  style={{top: '-130px'}} data-aos="fade-down">
                        {/* <Navbar.Toggle aria-controls='navbar-nav'/> */}
                        {/* <Navbar.Collapse id='navbar-nav'> */}
                            <Nav className='gap-3 py-2 fs-5'>
                                <Nav.Link href='#about' className="nav-link-custom">About</Nav.Link>
                                {/* <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link> */}
                                <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
                                <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
                                <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
                            </Nav>
                        {/* </Navbar.Collapse> */}
                    </Navbar>
          
    )
}

export default NavbarComponent;

{/* <Navbar bg="transparent" expand="lg" className="py-4 shadow-none">
                <Container>
                    <Navbar.Brand className="fs-3 fw-bold navbar-brand-custom maroon">
                        <img src="https://placehold.co/600x400/lightgreen/white" alt="Logo" width="50" height="50" className="d-inline-block align-top "/>{' '}
                        Muruga Sutha Kailasam
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto gap-3 fs-5">
                            <Nav.Link  className="nav-link-custom">About me</Nav.Link>
                            <Nav.Link className="nav-link-custom">Education</Nav.Link>
                            <Nav.Link className="nav-link-custom">Experience</Nav.Link>
                            <Nav.Link className="nav-link-custom">Projects</Nav.Link>
                            <Nav.Link  className="nav-link-custom">Contact</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar> */}