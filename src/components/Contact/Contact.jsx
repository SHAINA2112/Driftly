import "./Contact.css";
import { useState } from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa6";
import SectionHeading from "../SectionHeading/SectionHeading";

const Contact = () => {
  //stores all form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //stores error messages
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  //handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Tell us your name.";
    }
    if (!email.trim()) {
      newErrors.email = "We need your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }
    if (!subject.trim()) {
      newErrors.subject = "What's this about?";
    }
    if (!message.trim()) {
      newErrors.message = "Tell us about your dream trip.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <SectionHeading
          title="Let's Plan Your Next Escape"
          description="Whether you're dreaming of your next adventure or need expert guidance, we're here to help every step of the way."
        />
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <FaLocationDot />
            <div>
              <h3>Office</h3>
              <p>123 Travel Avenue, Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone />
            <div>
              <h3>Phone</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>driftly@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaClock />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error-input" : ""}
                disabled={submitted}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error-input" : ""}
                disabled={submitted}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "error-input" : ""}
              disabled={submitted}
            />
            {errors.subject && (
              <span className="error-text">{errors.subject}</span>
            )}
          </div>

          <div className="input-group">
            <textarea
              rows="7"
              name="message"
              placeholder="Tell us about your dream destination..."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error-input" : ""}
              disabled={submitted}
            />
            {errors.message && (
              <span className="error-text">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={`contact-btn ${submitted ? "success" : ""}`}
            disabled={submitted}
          >
            {submitted ? (
              <>
                <FaCheck />
                We'll be in touch soon!
              </>
            ) : (
              <>
                Send Message
                <FaPaperPlane />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
