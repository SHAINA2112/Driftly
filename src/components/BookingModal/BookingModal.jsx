import React, { useEffect } from "react";
import BookingForm from "./BookingForm";
import "./BookingModal.css";

const BookingModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="booking-close"
          onClick={onClose}
          aria-label="Close booking form"
        >
          ✕
        </button>
        <div className="booking-side">
          <div className="booking-side-content">
            <span className="booking-eyebrow">Driftly</span>
            <h2>Let's plan your next escape</h2>
            <p>Tell us where you want to go, we'll handle the rest.</p>
          </div>
        </div>
        <div className="booking-main">
          <BookingForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
