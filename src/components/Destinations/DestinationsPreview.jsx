import "./DestinationsPreview.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLocationDot, FaStar } from "react-icons/fa6";
import SectionHeading from "../SectionHeading/SectionHeading";
import destinationData from "../../data/destinationsData";

const DestinationPreview = () => {
  const featuredDestinations = destinationData.filter(
    (item) => item.featured === true,
  );
  return (
    <section className="destination-preview" id="destinations">
      <SectionHeading
        title="Discover Remarkable Places"
        description="From sun-kissed shores to breathtaking peaks,explore destinations chosen for their beauty, culture and unforgettable experiences."
      />
      <div className="destination-grid">
        {/* ternary conditional, the part after ? executes if the condition is true and the prt after : executes if the condition is false*/}
        {featuredDestinations.length > 0 ? (
          featuredDestinations.map((destination) => (
            <div className="destination-card" key={destination.id}>
              <img src={destination.image} alt={destination.title} />
              <div className="destination-overlay">
                <div className="destination-rating">
                  <FaStar />
                  <span>{destination.rating}</span>
                </div>
                <div className="destination-info">
                  <h3>{destination.title}</h3>
                  <p>
                    <FaLocationDot />
                    {destination.country}
                  </p>
                  <span>{destination.duration}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No Featured Destinations</h3>
            <p>Please check your destination data.</p>
          </div>
        )}
      </div>
      <div className="destination-btn">
        <Link to="/destinations">
          View All Destinations
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};
export default DestinationPreview;
