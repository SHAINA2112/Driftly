import "./PackagePreview.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLocationDot,
  FaStar,
  FaClock,
  FaUsers,
} from "react-icons/fa6";
import SectionHeading from "../SectionHeading/SectionHeading";
import packageData from "../../data/packageData";

const PackagePreview = () => {
  const featuredPackages = packageData.filter((item) => item.featured);
  return (
    <section className="package-preview" id="packages">
      {/* Reusable component SectionHeading  */}
      <SectionHeading
        title="Experiences Tailored For You"
        description="Luxury escapes, family holidays, romantic retreats, and thrilling adventures - find  a journey that perfectly matches your travel style. "
      />

      <div className="package-preview-grid">
        {featuredPackages.map((pkg) => (
          <div className="package-preview-card" key={pkg.id}>
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
              <div className="price-badge">{pkg.price}</div>
              <div className="rating-badge">
                <FaStar />
                {pkg.rating}
              </div>
            </div>
            <div className="package-content">
              <h3>{pkg.title}</h3>
              <p className="location">
                <FaLocationDot />
                {pkg.destination}, {pkg.country}
              </p>
              <div className="package-meta">
                <span>
                  <FaClock />
                  {pkg.duration}
                </span>
                <span>
                  <FaUsers />
                  {pkg.people} People
                </span>
              </div>
              <p className="description">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="package-btn">
        <Link to="/packages">
          View All Packages
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};
export default PackagePreview;
