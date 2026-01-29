import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const portfolioCategories = [
  {
    category: 'Corporate',
    items: [
      {
        id: 1,
        title: 'Enterprise Solutions',
        description: 'Large-scale workforce deployment for corporate giants',
        images: [
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
        ],
      },
      {
        id: 2,
        title: 'IT & Technology',
        description: 'Skilled tech professionals for digital transformation',
        images: [
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
        ],
      },
      {
        id: 3,
        title: 'Financial Services',
        description: 'Expert talent for banking and finance sectors',
        images: [
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
        ],
      },
    ],
  },
  {
    category: 'Business',
    items: [
      {
        id: 4,
        title: 'Manufacturing Excellence',
        description: 'Skilled operators for production facilities',
        images: [
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
          'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
          'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80',
        ],
      },
      {
        id: 5,
        title: 'Logistics & Supply Chain',
        description: 'Workforce solutions for seamless operations',
        images: [
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
          'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
          'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
        ],
      },
      {
        id: 6,
        title: 'Retail & Commerce',
        description: 'Customer-facing talent for retail success',
        images: [
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
          'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        ],
      },
    ],
  },
  {
    category: 'Entertainment',
    items: [
      {
        id: 7,
        title: 'Event Management',
        description: 'Professional staff for memorable events',
        images: [
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
          'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80',
        ],
      },
      {
        id: 8,
        title: 'Hospitality Services',
        description: 'Trained personnel for exceptional guest experiences',
        images: [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
        ],
      },
      {
        id: 9,
        title: 'Media & Production',
        description: 'Creative talent for media projects',
        images: [
          'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80',
          'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
          'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=600&q=80',
        ],
      },
    ],
  },
];

const PortfolioCard = ({ item }) => {
  return (
    <div className="portfolio-card">
      <Carousel interval={3000} indicators={false} controls={true}>
        {item.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt={`${item.title} ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="portfolio-card-body">
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="portfolio-section section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Our <span>Portfolio</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Showcasing our diverse workforce solutions across industries
          </p>
        </div>

        {portfolioCategories.map((category, categoryIndex) => (
          <div key={category.category} className="mb-5">
            <h3 className="portfolio-category-title">{category.category}</h3>
            <Row className="g-4">
              {category.items.map((item, itemIndex) => (
                <Col lg={4} md={6} key={item.id}>
                  <div 
                    className="animate-fade-up" 
                    style={{ animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.1}s` }}
                  >
                    <PortfolioCard item={item} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Portfolio;
