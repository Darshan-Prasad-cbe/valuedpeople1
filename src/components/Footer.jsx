import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer" id="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-560179707-f14e90ef3623?w=100&h=100&fit=crop" 
              alt="Valued People Inc." 
              className="footer-logo"
            />
            <h3 className="footer-company-name">Valued People Inc.</h3>
            <p className="footer-tagline">
              People are the heart of every organization, and we provide a comprehensive 
              spectrum of sustainable talent solutions to fuel your growth.
            </p>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/management">Management</Link></li>
              <li><Link to="/jobs">Careers</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><a href="#">Workforce Solutions</a></li>
              <li><a href="#">Talent Acquisition</a></li>
              <li><a href="#">HR Consulting</a></li>
              <li><a href="#">Training Programs</a></li>
              <li><a href="#">Contract Staffing</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="footer-heading">Contact Info</h5>
            <div className="footer-contact">
              <p>
                <span className="footer-contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                +91 94449 03707
              </p>
              <p>
                <span className="footer-contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                info@valuedpeople.in
              </p>
              <p>
                <span className="footer-contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                Chennai, India
              </p>
            </div>
            <div className="footer-social">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Valued People Inc. All Rights Reserved. 
            | Empowering Workforce Excellence
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
