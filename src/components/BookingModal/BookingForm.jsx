import React, { useState } from "react";
//storing initial data in form of a single object
const initialData = {
  destination: "",
  checkIn: "",
  checkOut: "",
  travelers: 1,
  name: "",
  email: "",
  phone: "",
};

const destinations = [
  "Hunza Valley, Pakistan",
  "Skardu, Pakistan",
  "Swat Valley, Pakistan",
  "Maldives",
  "Bali, Indonesia",
  "Istanbul, Turkey",
];

const BookingForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 2;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  //validation
  const isStep1Valid = data.destination && data.checkIn && data.checkOut;
  const isStep2Valid = data.name && data.email && data.phone;

  const nextStep = () => step === 1 && isStep1Valid && setStep(2);
  const prevStep = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isStep2Valid) return;
    console.log("Booking request:", data);
    setSubmitted(true);
  };
  //on submit
  if (submitted) {
    return (
      <div className="booking-success">
        <div className="booking-success-icon">✓</div>
        <h3>Request sent!</h3>
        <p>
          Thanks, {data.name.split(" ")[0]}. Our travel team will reach out
          within 24 hours to confirm your trip to {data.destination}.
        </p>
        <button
          type="button"
          className="booking-btn booking-btn-primary"
          onClick={onClose}
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-progress">
        <div className="booking-progress-bar">
          <div
            className="booking-progress-fill"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
        <span className="booking-progress-label">
          Step {step} of {totalSteps}
        </span>
      </div>

      {step === 1 && (
        <div className="booking-step">
          <h3>Trip details</h3>

          <div className="booking-field">
            <label htmlFor="destination">Destination</label>
            <select
              id="destination"
              name="destination"
              value={data.destination}
              onChange={handleChange}
              required
            >
              {/* options are added from destinations array */}
              <option value="" disabled>
                Where to?
              </option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="booking-row">
            <div className="booking-field">
              <label htmlFor="checkIn">Check-in</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={data.checkIn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="booking-field">
              <label htmlFor="checkOut">Check-out</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={data.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="travelers">Travelers</label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              min="1"
              max="20"
              value={data.travelers}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="button"
            className="booking-btn booking-btn-primary"
            onClick={nextStep}
            disabled={!isStep1Valid}
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="booking-step">
          <h3>Your details</h3>

          <div className="booking-field">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ayesha Khan"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-field">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+92 300 1234567"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-actions">
            <button
              type="button"
              className="booking-btn booking-btn-ghost"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              type="submit"
              className="booking-btn booking-btn-primary"
              disabled={!isStep2Valid}
            >
              Request booking
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default BookingForm;
