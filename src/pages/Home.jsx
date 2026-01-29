import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
    title: 'Igniting Excellence Through',
    highlight: 'Premier Talent',
    subtitle: 'We connect visionary organizations with exceptional professionals who transform possibilities into remarkable achievements.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
    title: 'Strategic Workforce',
    highlight: 'Deployment Excellence',
    subtitle: 'Comprehensive staffing strategies designed to optimize your operational efficiency and drive sustainable growth.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80',
    title: 'Seeking Dedicated Teams for',
    highlight: 'Critical Operations?',
    subtitle: 'Our curated talent pool ensures you have the right expertise at the right time for mission-critical projects.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
    title: 'Bespoke Solutions',
    highlight: 'Tailored to You',
    subtitle: 'From skilled craftsmen to operational experts, we deliver workforce solutions that align perfectly with your unique requirements.',
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Carousel 
        className="hero-carousel" 
        fade 
        interval={5000}
        indicators={true}
        controls={true}
      >
        {heroSlides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div 
              className="hero-slide" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1>
                  {slide.title} <span>{slide.highlight}</span>
                </h1>
                <p>{slide.subtitle}</p>
                <div className="hero-buttons">
                  <Link to="/about" className="btn btn-primary-custom">
                    Discover Our Story
                  </Link>
                  <Link to="/jobs" className="btn btn-outline-custom">
                    Explore Opportunities
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Quick Stats Section */}
      <section className="section-padding bg-gradient-primary">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              Why Choose <span>Valued People Inc.</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Three decades of expertise in connecting exceptional talent with visionary organizations
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center animate-fade-up">
                <div className="display-3 mb-3">33+</div>
                <h5 className="text-gold">Years of Excellence</h5>
                <p className="text-muted">Industry-leading experience in workforce solutions</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center animate-fade-up">
                <div className="display-3 mb-3">500+</div>
                <h5 className="text-gold">Partner Companies</h5>
                <p className="text-muted">Trusted relationships across industries</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center animate-fade-up">
                <div className="display-3 mb-3">10K+</div>
                <h5 className="text-gold">Placements Made</h5>
                <p className="text-muted">Successful career transformations</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center animate-fade-up">
                <div className="display-3 mb-3">98%</div>
                <h5 className="text-gold">Client Satisfaction</h5>
                <p className="text-muted">Excellence in every placement</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding" style={{ background: 'var(--primary-black)' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              Our <span>Expertise</span>
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="management-card animate-fade-up">
                <div className="mb-4">
                  <i className="bi bi-gear-wide-connected" style={{ fontSize: '3rem', color: 'var(--gold-bright)' }}></i>
                </div>
                <h4 className="text-gold mb-3">Skilled Workforce</h4>
                <p>Expert technicians and certified professionals for precision-demanding industrial operations.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="management-card animate-fade-up">
                <div className="mb-4">
                  <i className="bi bi-people-fill" style={{ fontSize: '3rem', color: 'var(--gold-bright)' }}></i>
                </div>
                <h4 className="text-gold mb-3">Semi-Skilled Operators</h4>
                <p>Trained personnel ready to contribute effectively to your production and assembly lines.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="management-card animate-fade-up">
                <div className="mb-4">
                  <i className="bi bi-building-gear" style={{ fontSize: '3rem', color: 'var(--gold-bright)' }}></i>
                </div>
                <h4 className="text-gold mb-3">Support Staff</h4>
                <p>Dedicated workforce for logistics, maintenance, and essential operational support roles.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/about" className="btn btn-outline-custom">
              Learn More About Us
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
