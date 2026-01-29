import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
} from "react-bootstrap";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Production Manager",
      company: "ABC Manufacturing",
      content:
        "Valued People Inc. provided us with exceptional workforce solutions. Their team understood our requirements perfectly and delivered skilled professionals who exceeded our expectations.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      date: "December 5, 2024",
      likes: 24,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "HR Director",
      company: "TechnoWorks India",
      content:
        "Working with VPI has been a game-changer for our staffing needs. Their professionalism and commitment to quality is unmatched in the industry.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      date: "December 3, 2024",
      likes: 18,
    },
    {
      id: 3,
      name: "Mohammed Ali",
      role: "Operations Head",
      company: "Industrial Solutions Ltd",
      content:
        "The workforce deployed by Valued People Inc. demonstrated excellent skills and dedication. They helped us meet our production targets consistently.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      date: "November 28, 2024",
      likes: 31,
    },
    {
      id: 4,
      name: "Lakshmi Venkatesh",
      role: "Plant Supervisor",
      company: "Precision Parts Co.",
      content:
        "VPI's CNC operators are top-notch! Their expertise in VMC and HMC operations helped us improve our manufacturing efficiency by 40%.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      date: "November 25, 2024",
      likes: 42,
    },
    {
      id: 5,
      name: "Arun Prakash",
      role: "Factory Manager",
      company: "AutoParts Industries",
      content:
        "Reliable, skilled, and professional - that's how I would describe the workforce from Valued People Inc. Highly recommended for any manufacturing unit.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      date: "November 20, 2024",
      likes: 27,
    },
    {
      id: 6,
      name: "Sunita Reddy",
      role: "Quality Manager",
      company: "Premier Electronics",
      content:
        "The training and skill level of VPI's workforce is impressive. They adapted quickly to our quality standards and processes.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      date: "November 15, 2024",
      likes: 19,
    },
  ]);

  const [newPost, setNewPost] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    mediaType: "none",
    mediaUrl: "",
  });

  const [showMediaModal, setShowMediaModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.name && newPost.content) {
      const post = {
        id: Date.now(),
        name: newPost.name,
        role: newPost.role || "Professional",
        company: newPost.company || "Industry Partner",
        content: newPost.content,
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        likes: 0,
        mediaType: newPost.mediaType,
        mediaUrl: newPost.mediaUrl,
      };
      setTestimonials((prev) => [post, ...prev]);
      setNewPost({
        name: "",
        role: "",
        company: "",
        content: "",
        mediaType: "none",
        mediaUrl: "",
      });
    }
  };

  const handleLike = (id) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, likes: t.likes + 1 } : t))
    );
  };

  const openMediaModal = (media) => {
    setSelectedMedia(media);
    setShowMediaModal(true);
  };

  return (
    <section className="testimonials-section">
      <Container>
        <div className="section-header text-center">
          <h1 className="section-title">Client Testimonials</h1>
          <p className="section-subtitle">
            Hear What Our Partners Say About Us
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Post Creation Form */}
        <div className="post-creation-card">
          <h3 className="post-form-title">
            <i className="bi bi-pencil-square"></i> Share Your Experience
          </h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={newPost.name}
                    onChange={handleInputChange}
                    className="testimonial-input"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="role"
                    placeholder="Your Role"
                    value={newPost.role}
                    onChange={handleInputChange}
                    className="testimonial-input"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={newPost.company}
                    onChange={handleInputChange}
                    className="testimonial-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                name="content"
                placeholder="Write your testimonial here... *"
                value={newPost.content}
                onChange={handleInputChange}
                className="testimonial-input testimonial-textarea"
                required
              />
            </Form.Group>
            <Row className="align-items-center">
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Select
                    name="mediaType"
                    value={newPost.mediaType}
                    onChange={handleInputChange}
                    className="testimonial-input"
                  >
                    <option value="none">No Media</option>
                    <option value="image">Add Image URL</option>
                    <option value="video">Add Video URL</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={5}>
                {newPost.mediaType !== "none" && (
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="url"
                      name="mediaUrl"
                      placeholder={
                        newPost.mediaType === "image"
                          ? "Paste image URL..."
                          : "Paste video URL (YouTube/Vimeo)..."
                      }
                      value={newPost.mediaUrl}
                      onChange={handleInputChange}
                      className="testimonial-input"
                    />
                  </Form.Group>
                )}
              </Col>
              <Col md={3} className="text-end">
                <Button type="submit" className="post-submit-btn">
                  <i className="bi bi-send-fill"></i> Post Review
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-user-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>

              <div className="testimonial-content">
                <p>{testimonial.content}</p>
              </div>

              {testimonial.mediaType === "image" && testimonial.mediaUrl && (
                <div
                  className="testimonial-media"
                  onClick={() =>
                    openMediaModal({ type: "image", url: testimonial.mediaUrl })
                  }
                >
                  <img src={testimonial.mediaUrl} alt="Testimonial media" />
                </div>
              )}

              {testimonial.mediaType === "video" && testimonial.mediaUrl && (
                <div className="testimonial-media video">
                  <iframe
                    src={testimonial.mediaUrl.replace("watch?v=", "embed/")}
                    title="Testimonial video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <div className="testimonial-footer">
                <span className="testimonial-date">
                  <i className="bi bi-calendar3"></i> {testimonial.date}
                </span>
                <button
                  className="testimonial-like-btn"
                  onClick={() => handleLike(testimonial.id)}
                >
                  <i className="bi bi-heart-fill"></i> {testimonial.likes}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Media Modal */}
        <Modal
          show={showMediaModal}
          onHide={() => setShowMediaModal(false)}
          centered
          size="lg"
          className="media-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Media Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedMedia?.type === "image" && (
              <img
                src={selectedMedia.url}
                alt="Full view"
                className="modal-media-image"
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default TestimonialsPage;

