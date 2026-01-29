import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap';

const accordionItems = [
  {
    id: '0',
    title: 'Holistic Development',
    content: `At Valued People Inc., we believe in nurturing complete professional growth. 
    Our holistic approach encompasses technical skill enhancement, soft skills development, 
    and career guidance that transforms individuals into invaluable assets for any organization. 
    We invest in people because we understand that their growth directly translates to 
    organizational success and sustainable workforce excellence.`,
  },
  {
    id: '1',
    title: 'Building Relationships',
    content: `Trust forms the cornerstone of everything we do. We cultivate lasting partnerships 
    with both our clients and candidates, understanding that meaningful connections lead to 
    successful placements. Our relationship-first approach ensures transparency, open communication, 
    and mutual respect at every step of the journey, creating bonds that extend far beyond 
    transactional interactions.`,
  },
  {
    id: '2',
    title: 'Personal Touch',
    content: `In an age of automation, we remain committed to the human element. Every candidate 
    receives personalized attention, and every client requirement is understood in depth. 
    Our dedicated team takes the time to comprehend unique needs, ensuring tailored solutions 
    that generic algorithms simply cannot match. This personal investment in each relationship 
    defines our distinctive approach.`,
  },
  {
    id: '3',
    title: 'Beyond Financials',
    content: `While business metrics matter, our true measure of success lies in the positive 
    impact we create. We prioritize placements that foster career growth, workplace satisfaction, 
    and long-term stability over short-term gains. Our commitment extends to community development, 
    skill upliftment, and creating sustainable employment ecosystems that benefit all stakeholders.`,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="contact-section section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            We would love to hear from you. Reach out to explore partnership opportunities.
          </p>
        </div>

        <Row className="g-5">
          <Col lg={6}>
            <h3 className="text-gold mb-4">Our Values</h3>
            <Accordion defaultActiveKey="0" className="contact-accordion">
              {accordionItems.map((item) => (
                <Accordion.Item key={item.id} eventKey={item.id}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>

          <Col lg={6}>
            <div className="contact-form-container">
              <h3 className="text-gold mb-4">Send Us a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                  <Form.Label>Your Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control-custom"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control-custom"
                    placeholder="your.email@example.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control-custom"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label>Your Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control-custom"
                    placeholder="How can we help you?"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn btn-primary-custom w-100">
                  Send Message
                </Button>
              </Form>

              <div className="contact-info-box">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h6>Call Us 24/7</h6>
                    <p>+91 94449 03707</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h6>Email Us</h6>
                    <p>info@valuedpeople.in</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <h6>Open Hours</h6>
                    <p>Daily 9:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
