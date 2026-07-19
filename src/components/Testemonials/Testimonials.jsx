import "./Testimonials.css";
import { useEffect, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa6";
import SectionHeading from "../SectionHeading/SectionHeading";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  return (
    <section className="testimonials" id="testimonials">
      {/* Reusable component SectionHeading  */}
      <SectionHeading
        title="Loved By Travelers Worldwide"
        description="Every journey tells a story. Discover why travelers choose Driftly to turn their dream vacations into unforgettable realities."
      />

      <div className="testimonial-slider">
        <button className="slider-btn prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="testimonial-wrapper">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-card ${
                index === current ? "active" : ""
              }`}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="review">"{item.review}"</p>
              <h3>{item.name}</h3>
              <span>
                {item.country} • {item.trip}
              </span>
            </div>
          ))}
        </div>
        <button className="slider-btn next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
