import React, { useState, useEffect } from "react";
import "../Styles/BookingPage.css";

// Initial slot data stored as JSON format
const initialSlotData = {
  "2025-03-21": ["10:00 AM", "11:00 AM", "02:00 PM"],
  "2025-03-22": ["09:00 AM", "01:00 PM", "03:00 PM"],
};

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Page 1: Basic Info
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",

    // Page 2: Slot Booking Info
    date: "",
    timeSlot: "",

    // Page 3: Career Info
    jobTitle: "",
    experience: "",
    skills: "",
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState(initialSlotData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle date change and update available slots
  useEffect(() => {
    if (formData.date) {
      const slots = bookedSlots[formData.date] || [];
      setAvailableSlots(slots);
    }
  }, [formData.date]);

  // Move to next step
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  // Move to previous step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Handle form submission and update booked slots
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.timeSlot) {
      alert("Please select a date and time slot.");
      return;
    }

    // Store booked slot in JSON format
    const updatedSlots = { ...bookedSlots };
    updatedSlots[formData.date] = updatedSlots[formData.date]?.filter(
      (slot) => slot !== formData.timeSlot
    );
    setBookedSlots(updatedSlots);

    alert("Slot booked successfully! 🎉");
    console.log("Form Data:", formData);
    console.log("Updated Slot Data:", updatedSlots);
  };

  // Progress bar calculation
  const progress = (step / 3) * 100;

  return (
    <div className="booking-container">
      {/* Left Side - Image */}
      <div className="booking-image">
        <img src="/Images/form.svg" alt="Booking" />
      </div>

      {/* Right Side - Form with Progress Bar */}
      <div className="booking-form">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>

<h2>Step 1: Slot Booking</h2>
              <div className="input-flex">
                <div>
                  <label htmlFor="date">Select Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  {formData.date && availableSlots.length > 0 && (
                    <>
                      <label htmlFor="timeSlot">Available Time Slot</label>
                      <select
                        name="timeSlot"
                        id="timeSlot"
                        className="form-input"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Time Slot</option>
                        {availableSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                  {formData.date && availableSlots.length === 0 && (
                    <p className="no-slot">No available slots for this date.</p>
                  )}
                </div>
              </div>
             
              <button type="button" className="form-btn" onClick={nextStep}>
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Step 2: Basic Information</h2>
              <div className="input-flex">
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-flex">
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="location">Current Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="form-input"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                className="form-input"
                value={formData.linkedin}
                onChange={handleChange}
                required
              />


              <button type="button" className="form-btn" onClick={prevStep}>
                Back
              </button>
              <button type="button" className="form-btn" onClick={nextStep}>
                Next
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h2>Step 3: Career Info</h2>
              <div className="input-flex">
                <div>
                  <label htmlFor="jobTitle">Current Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    className="form-input"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="experience">Years of Experience</label>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    className="form-input"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <label htmlFor="skills">Key Skills</label>
              <input
                type="text"
                name="skills"
                id="skills"
                className="form-input"
                value={formData.skills}
                onChange={handleChange}
                required
              />

              <button type="button" className="form-btn" onClick={prevStep}>
                Back
              </button>
              <button type="submit" className="form-btn">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
