import "./GalleryModal.css";
import {FaTimes,FaChevronLeft,FaChevronRight,FaMapMarkerAlt,} from "react-icons/fa";
const GalleryModal = ({ isOpen, onClose, currentImage, onPrev, onNext }) => {
  if (!isOpen || !currentImage) return null;
  return (
    <div className="gallery-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <button className="nav-btn prev-btn" onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <img src={currentImage.image} alt={currentImage.title} />
        <button className="nav-btn next-btn" onClick={onNext}>
          <FaChevronRight />
        </button>
        <div className="modal-info">
          <h2>{currentImage.title}</h2>
          <p className="country">
            <FaMapMarkerAlt />
            {currentImage.country}
          </p>
          <p>{currentImage.description}</p>
        </div>
      </div>
    </div>
  );
};
export default GalleryModal;
