import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="top-header">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} md={3} className="d-flex justify-content-start">
            <Link to="/">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop" 
                alt="Valued People Inc. Logo" 
                className="header-logo"
              />
            </Link>
          </Col>
          <Col xs={4} md={6} className="d-flex justify-content-center">
            <h1 className="company-name mb-0">Valued People Inc.</h1>
          </Col>
          <Col xs={4} md={3} className="d-flex justify-content-end">
            <div className="social-icons">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
