import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="section-padding min-vh-100 d-flex align-items-center">
      <Container className="text-center">
        <h1 className="display-1 text-gold mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="mb-5 text-muted">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary-custom">
          Return to Home
        </Link>
      </Container>
    </section>
  );
};

export default NotFoundPage;
