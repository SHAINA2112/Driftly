import "./About.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaLocationDot, FaEarthAsia, FaUsers,} from "react-icons/fa6";
import aboutImage from "../../assets/images/About/About.jpeg";
const features = [
  "Handpicked Destinations",
  "Luxury Accommodations",
  "Best Price Guarantee",
  "24/7 Customer Support",
];
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Driftly" />
          {/* Floating Card */}
          <div className="about-card">
            <FaLocationDot />
            <div>
              <h4>120+ Destinations</h4>
              <span>Across The World</span>
            </div>
          </div>
          {/* Stats */}
          <div className="about-stats">
            <div className="stat-box">
              <FaEarthAsia />
              <div>
                <h3>60+</h3>
                <span>Countries</span>
              </div>
            </div>
            <div className="stat-box">
              <FaUsers />
              <div>
                <h3>15K+</h3>
                <span>Happy Travelers</span>
              </div>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className="about-content">
          <h2>
            Crafting Journeys
            <span>That Stay With You.</span>
          </h2>
          <p>
            At Driftly, we believe exceptional travel begins with thoughtfull planning. From iconic destinations to hidden escapes ,every experience is carefully curated to inspire, delight and create memories that last a lifetime.
          </p>
          <div className="about-features">
            {/* Displaying Cards  */}
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <FaCheck />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="about-buttons">
            <Link to="/packages" className="about-btn">
              Explore Packages
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
