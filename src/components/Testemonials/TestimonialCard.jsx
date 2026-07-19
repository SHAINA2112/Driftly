import "./Testimonials.css";
import { FaStar, FaQuoteRight } from "react-icons/fa";
const TestimonialCard = ({ image, name, country, review }) => {
  return (
    <div className="testimonial-card">
      <FaQuoteRight className="quote-icon" />
      <img src={image} alt={name} className="testimonial-image" />
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="review">"{review}"</p>
      <h3>{name}</h3>
      <span>{country}</span>
    </div>
  );
};
export default TestimonialCard;
