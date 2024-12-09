

import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='py-0 header'>
      {/* Top Banner */}
      <div className="bg-color text-white text-center py-2">
        <span>"Explore 5000+ new Jobs"</span>
      </div>

      {/* Navbar */}
      <Navbar bg="transparent" expand="lg" className="px-5 py-4">
       
          <Navbar.Brand href="#home" className='text-white'><i class='bx bx-briefcase text-white pe-2' ></i> Job Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
            <Form className="d-flex me-3" style={{ maxWidth: '200px' }}>
                <FormControl
                  type="search"
                  placeholder="Job title or company"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Nav.Link href="#jobs" className='text-white mx-3'>Jobs</Nav.Link>
              <Nav.Link href="#blogs" className='text-white mx-3'>Blogs</Nav.Link>
              <Nav.Link href="#contact" className='text-white mx-3'>Contact Us</Nav.Link>
              <Nav.Link href="#contact" className='text-white mx-3'><i class='bx bxs-bell text-white' ></i></Nav.Link>
              <Link to="/auth/signin-1">
              <Button className="ms-2 text-white bg-suc">Sign In</Button>
              </Link>
              
              <Link to="/auth/signup-1">
              <Button className="ms-2 text-white bg-suc">Sign Up</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
      <div className="banner text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          {/* <Form className="d-flex justify-content-center mt-4">
            <Row className="w-100" xs={1} sm={2} md={4}>
              <Col>
                <FormControl type="text" placeholder="Job Title or Company" className="mb-2" />
              </Col>
              <Col>
                <Form.Select className="mb-2">
                  <option>Select Location</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select className="mb-2">
                  <option>Type of Work</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="success" className="w-100">Search Job</Button>
              </Col>
            </Row>
          </Form> */}
        </Container>
      </div>
    
    </header>
  );
};

export default Header;

