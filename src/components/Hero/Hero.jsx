import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaStar, FaLocationDot } from "react-icons/fa6";
import heroMain from "../../assets/images/hero images/img2.png";
import heroSmall1 from "../../assets/images/hero images/img1.jpeg";
import heroSmall2 from "../../assets/images/hero images/img3.jpeg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-container">
        {/* Left */}
        <div className="hero-left">
          <span className="hero-badge">Curated Luxury Experiences</span>
          <h1>
            Travel Beyond
            <span>The Ordinary.</span>
          </h1>
          <p>
            Discover breathtaking destinations, thoughtfully crafted journeys, adn unforgettable moments designed for every traveler.
          </p>
          <div className="hero-buttons">
            <Link to="/packages" className="primary-btn">
              Explore Tours
              <FaArrowRight />
            </Link>
    
          </div>
          <div className="hero-stats">
            <div>
              <h3>15k+</h3>
              <span>Happy Travelers</span>
            </div>
            <div>
              <h3>120+</h3>
              <span>Destinations</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            {/* Main */}
            <img src={heroMain} alt="Travel" className="hero-main" />
            {/* Card */}
            <div className="floating-card card-one">
              <FaLocationDot />
              <div>
                <h4>Bali</h4>
                <span>2.3k Bookings</span>
              </div>
            </div>
            {/* Card */}
            <div className="floating-card card-two">
              <FaStar />
              <div>
                <h4>4.9 Rating</h4>
                <span>Best Choice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
