import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const aboutSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    title: 'Meticulous Talent Curation',
    description: 'Every candidate undergoes rigorous assessment to ensure perfect alignment with your organizational needs.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    title: 'Continuous Skill Advancement',
    description: 'Our commitment to excellence drives ongoing development and enhancement of workforce capabilities.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    title: 'Industry-Driven Intelligence',
    description: 'Leveraging decades of expertise to deliver actionable insights and strategic workforce solutions.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    title: 'Dependable Talent Deployment',
    description: 'Consistent, reliable workforce solutions that you can count on for critical operations.',
  },
];

const aboutSections = [
  {
    id: 1,
    title: 'Discover Valued People Inc.',
    content: `At the core of every thriving enterprise lies its most valuable asset — its people. 
    We understand this fundamental truth and have dedicated ourselves to bridging the 
    gap between exceptional talent and forward-thinking organizations. With over three decades 
    of diverse industry experience stemming from our founder's remarkable journey, Valued People Inc. 
    delivers bespoke manpower solutions meticulously crafted to address your unique operational demands.`,
  },
  {
    id: 2,
    title: 'Our Comprehensive Workforce Solutions',
    content: `We specialize in deploying highly capable professionals across all skill levels 
    — from seasoned technical experts and semi-skilled operators to dedicated 
    support personnel — serving diverse industrial sectors with unwavering commitment.
    We transcend traditional recruitment paradigms. As your strategic workforce partners, 
    we drive operational efficiency, foster innovation, and catalyze sustainable growth 
    within your organization.`,
  },
  {
    id: 3,
    title: 'Our Vision & Mission',
    content: `Our vision extends beyond mere placements — we aspire to revolutionize workforce 
    standards and bridge the critical talent gap across India's evolving industrial landscape.
    We are not just recruiters—we're strategic partners driving efficiency and growth for 
    businesses across the nation.`,
  },
  {
    id: 4,
    title: 'The Genesis of Excellence',
    content: `Our founder's extensive experience spanning electronics, automotive, and power 
    sectors provided the foundation for VPI's creation. This wealth of knowledge 
    inspired a mission to transform the manpower ecosystem and create meaningful 
    employment opportunities across the nation. With 33+ years of diverse experience, 
    we deliver solutions tailored to your operational needs.`,
  },
];

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <section className="about-section section-padding">
      <Container fluid>
        <Row className="g-0 align-items-stretch">
          <Col lg={6} className="about-text-column d-flex flex-column justify-content-center">
            <div className="animate-fade-left">
              <h2>
                About <span>Valued People Inc.</span>
              </h2>
              <div className="section-divider"></div>
              
              <div className="about-accordion">
                {aboutSections.map((section) => (
                  <div 
                    key={section.id}
                    className={`about-accordion-item ${activeSection === section.id ? 'active' : ''}`}
                  >
                    <div 
                      className="about-accordion-header"
                      onClick={() => toggleSection(section.id)}
                    >
                      <h5>{section.title}</h5>
                      <span className="accordion-icon">
                        {activeSection === section.id ? '−' : '+'}
                      </span>
                    </div>
                    <div className={`about-accordion-content ${activeSection === section.id ? 'show' : ''}`}>
                      <p>{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="about-carousel-column">
            <div className="about-carousel-wrapper">
              <Carousel 
                className="about-carousel" 
                fade 
                interval={4000}
                indicators={true}
                prevIcon={<span className="carousel-control-icon prev-icon">‹</span>}
                nextIcon={<span className="carousel-control-icon next-icon">›</span>}
              >
                {aboutSlides.map((slide) => (
                  <Carousel.Item key={slide.id}>
                    <div 
                      className="about-slide" 
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="about-slide-overlay"></div>
                      <div className="about-slide-content animate-fade-up">
                        <h4>{slide.title}</h4>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
