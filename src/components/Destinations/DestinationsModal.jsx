import "./DestinationsModal.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLocationDot,
  FaStar,
  FaClock,
} from "react-icons/fa6";

const DestinationModal = ({
  isOpen,
  currentDestination,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!isOpen || !currentDestination) return null;
  return (
    <div className="destination-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
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
        <div className="modal-image">
          <img src={currentDestination.image} alt={currentDestination.title} />
        </div>
        <div className="modal-details">
          <div className="modal-header">
            <h2>{currentDestination.title}</h2>
            <div className="rating">
              <FaStar />
              {currentDestination.rating}
            </div>
          </div>
          <div className="modal-meta">
            <span>
              <FaLocationDot />
              {currentDestination.country}
            </span>
            <span>
              <FaClock />
              {currentDestination.duration}
            </span>
            <span className="price">{currentDestination.price}</span>
          </div>
          <p>{currentDestination.description}</p>
        </div>
      </div>
    </div>
  );
};
export default DestinationModal;
