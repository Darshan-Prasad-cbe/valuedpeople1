import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="navbar-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/management" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Management
            </NavLink>
            <NavLink 
              to="/jobs" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Jobs
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
