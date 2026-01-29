import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

const managementTeam = [
  {
    id: 1,
    name: 'S. Pauline S. Solomon',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    shortDesc: `The visionary architect behind Valued People Inc., dedicated to empowering India's workforce with dependable talent deployment solutions.`,
    fullDesc: `The visionary architect behind Valued People Inc., Mrs. Solomon has dedicated her leadership 
    to empowering India's workforce and enabling industries with dependable talent deployment solutions. 
    Her mission transcends business metrics — she strives to provide every aspiring professional the 
    opportunity to flourish and grow alongside VPI's remarkable journey of transformation.
    
    Under her strategic leadership, VPI has grown to become a trusted partner for numerous industries across India. 
    Her commitment to excellence and innovation has positioned the company at the forefront of workforce solutions.`,
  },
  {
    id: 2,
    name: 'Joshua M. Solomon',
    role: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    shortDesc: `Established VPI as a beacon of hope for workforce excellence, committed to uplifting skilled workers across India.`,
    fullDesc: `With an unwavering commitment to uplifting skilled workers and propelling India's industrial 
    advancement, Mr. Solomon established VPI as a beacon of hope for workforce excellence. Under his 
    strategic guidance, the leadership team remains steadfast in bridging the crucial gap between 
    industry demands and individual career aspirations, creating pathways to success for thousands.
    
    His 33+ years of diverse experience in electronics, automotive, and power sectors have shaped 
    VPI's comprehensive approach to workforce solutions. His vision continues to inspire the entire organization.`,
  },
  {
    id: 3,
    name: 'Burvin Banu',
    role: 'General Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    shortDesc: `A seasoned professional with expertise in manufacturing operations, leading VPI's Chennai operations with distinction.`,
    fullDesc: `A seasoned professional with distinguished expertise in manufacturing operations, commercial 
    real estate, and government projects. Ms. Banu brings exceptional leadership in operational excellence, 
    MIS implementation, project management, and CRM strategies. Her tenure at industry leaders like 
    Nordex Group and TPI Composites has honed her skills in negotiations, business development, and 
    stakeholder management.
    
    A passionate advocate for women's empowerment in industrial sectors, she now spearheads VPI's Chennai 
    operations with distinction. Her strong background includes experience with the TN Industrial Guidance Bureau 
    and extensive work in continuous improvement initiatives.`,
  },
];

const Management = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <section className="management-section section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Meet Our <span>Leadership</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Visionary leaders driving workforce excellence and innovation
          </p>
        </div>
        
        <Row className="g-4 justify-content-center">
          {managementTeam.map((member, index) => (
            <Col lg={4} md={6} key={member.id}>
              <div 
                className="management-card animate-fade-up clickable" 
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleCardClick(member)}
              >
                <div className="management-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.shortDesc}</p>
                <span className="click-hint">Click to view more</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered 
        size="lg"
        className="management-modal"
      >
        {selectedMember && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMember.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-content-wrapper">
                <div className="modal-photo">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                </div>
                <div className="modal-info">
                  <span className="modal-role">{selectedMember.role}</span>
                  <p className="modal-description">{selectedMember.fullDesc}</p>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Management;
