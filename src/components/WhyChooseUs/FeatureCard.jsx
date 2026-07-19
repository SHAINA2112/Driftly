// import "../WhyChooseUs/WhyChooseUs.css"
import { FaArrowRight } from "react-icons/fa";
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="feature-btn">
        Learn More
        <FaArrowRight />
      </button>
    </div>
  );
};
export default FeatureCard;
