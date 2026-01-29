import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const jobRoles = [
  "CNC Operator",
  "VMC Operator",
  "HMC Operator",
  "VTL Operator",
  "Fresher",
  "Machine Operator",
  "Voice Process",
  "Non-Voice Process",
  "Supervisor",
  "Others",
];

const jobPostings = [
  {
    id: 1,
    title: "CNC Machine Operator",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Seeking skilled CNC operators with expertise in programming and precision machining.",
  },
  {
    id: 2,
    title: "Production Supervisor",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Lead production teams and ensure quality standards in manufacturing operations.",
  },
  {
    id: 3,
    title: "Quality Inspector",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Conduct quality checks and maintain compliance with industry standards.",
  },
];

const Jobs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobRole: "",
    otherRole: "",
    resume: null,
    dob: "",
    education: "",
  });

  const [showOtherField, setShowOtherField] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "jobRole") {
      setShowOtherField(value === "Others");
    }

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      jobRole: "",
      otherRole: "",
      resume: null,
      dob: "",
      education: "",
    });
    setShowOtherField(false);
  };

  return (
    <section className="jobs-section section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Career <span>Opportunities</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Discover your next career milestone with Valued People Inc.
          </p>
        </div>

        {/* Job Postings */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="text-gold mb-4">Current Openings</h3>
            {jobPostings.map((job) => (
              <div key={job.id} className="job-posting-card">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h4 className="text-gold mb-2">{job.title}</h4>
                    <p className="mb-2">
                      <i className="bi bi-geo-alt me-2"></i>
                      {job.location} |
                      <i className="bi bi-briefcase ms-3 me-2"></i>
                      {job.type} |<i className="bi bi-clock ms-3 me-2"></i>
                      {job.experience}
                    </p>
                    <p className="mb-0 text-muted">{job.description}</p>
                  </Col>
                  <Col md={4} className="text-md-end mt-3 mt-md-0">
                    <button
                      className="btn btn-outline-custom"
                      onClick={() => {
                        document
                          .getElementById("apply-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Apply Now
                    </button>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>

        {/* Application Form */}
        <Row className="justify-content-center" id="apply-form">
          <Col lg={8}>
            <div className="job-form-container">
              <h3 className="text-center text-gold mb-4">
                Submit Your Application
              </h3>
              <p className="text-center mb-5 text-muted">
                Take the first step towards your dream career
              </p>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control-custom"
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
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
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Contact Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control-custom"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Date of Birth *</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="form-control-custom"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Preferred Job Role *</Form.Label>
                      <Form.Select
                        name="jobRole"
                        value={formData.jobRole}
                        onChange={handleChange}
                        className="form-control-custom form-select-custom"
                        required
                      >
                        <option value="">Select a role</option>
                        {jobRoles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Educational Qualification *</Form.Label>
                      <Form.Control
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="form-control-custom"
                        placeholder="e.g., B.Tech, ITI, Diploma"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {showOtherField && (
                  <Row>
                    <Col md={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Specify Your Role *</Form.Label>
                        <Form.Control
                          type="text"
                          name="otherRole"
                          value={formData.otherRole}
                          onChange={handleChange}
                          className="form-control-custom"
                          placeholder="Please specify your desired role"
                          required={showOtherField}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                <Row>
                  <Col md={12}>
                    <Form.Group className="form-group">
                      <Form.Label>Upload Resume *</Form.Label>
                      <Form.Control
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        className="form-control-custom"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      <small className="text-muted mt-2 d-block">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                      </small>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Button type="submit" className="btn btn-primary-custom px-5">
                    Submit Application
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Jobs;
