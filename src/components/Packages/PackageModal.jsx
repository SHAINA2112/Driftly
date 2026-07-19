import "./PackageModal.css";
import {FaChevronLeft,FaChevronRight,FaLocationDot,FaClock,FaUsers,FaStar,FaTag,} from "react-icons/fa6";

const PackageModal = ({
  isOpen,
  currentPackage,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!isOpen || !currentPackage) return null;
  return (
    <div className="package-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="package-modal-container">
        <div className="image-counter">
          {currentIndex + 1} / {totalItems}
        </div>

        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <button className="nav-btn prev-btn" onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <button className="nav-btn next-btn" onClick={onNext}>
          <FaChevronRight />
        </button>

        <div className="package-modal-image">
          <img src={currentPackage.image} alt={currentPackage.title} />
        </div>

        <div className="package-modal-content">
          <div className="modal-header">
            <div>
              <h2>{currentPackage.title}</h2>
              <p>
                <FaLocationDot />
                {currentPackage.destination}, {currentPackage.country}
              </p>
            </div>
            <div className="modal-rating">
              <FaStar />
              {currentPackage.rating}
            </div>
          </div>
          <div className="modal-info-grid">
            <div className="info-box">
              <FaClock />
              <div>
                <small>Duration</small>
                <h4>{currentPackage.duration}</h4>
              </div>
            </div>
            <div className="info-box">
              <FaUsers />
              <div>
                <small>Travelers</small>
                <h4>{currentPackage.people}</h4>
              </div>
            </div>
            <div className="info-box">
              <FaTag />
              <div>
                <small>Category</small>
                <h4>{currentPackage.category}</h4>
              </div>
            </div>
            <div className="info-box price-box">
              <small>Price</small>
              <h3>{currentPackage.price}</h3>
            </div>
          </div>
          <div className="modal-description">
            <h3>About this Package</h3>
            <p>{currentPackage.description}</p>
          </div>
          <button className="book-package-btn">Book This Package</button>
        </div>
      </div>
    </div>
  );
};
export default PackageModal;
