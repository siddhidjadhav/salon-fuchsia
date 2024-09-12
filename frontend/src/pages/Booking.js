// src/pages/Booking.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // To get the service name from the URL and Link for navigation
import './Booking.css'; // Optional CSS file for styling

const Booking = () => {
  const { serviceName } = useParams(); // Get the service name from the URL
  
  // Define some sample slots for demonstration
  const slots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
  ];

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [purpose, setPurpose] = useState('');
  const [bookedSlot, setBookedSlot] = useState(null);

  const openModal = (slot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBooking = () => {
    // Simulate booking logic
    setBookedSlot({ slot: selectedSlot, purpose });
    setIsModalOpen(false);
    setAddress('');
    setPhoneNumber('');
    setPurpose('');
  };

  return (
    <div className="booking-page">
      <h1>Are you free for {serviceName}</h1>
      <p>Mark it up on your calender</p>
      
      <table className="slots-table">
        <tbody>
          {slots.map((slot, index) => (
            <tr key={index}>
              <td>{slot}</td>
              <td>
                <button onClick={() => openModal(slot)}>Book Slot</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {bookedSlot && (
        <p className="booking-confirmation">
          You have booked the {bookedSlot.slot} slot for {serviceName} with the purpose: "{bookedSlot.purpose}".
        </p>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>x</button>
            <h2>Enter Your Details</h2>
            <form>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="purpose">Special Instructions</label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  required
                />
              </div>
              <button type="button" onClick={handleBooking}>Book Slot</button>
            </form>
          </div>
        </div>
      )}
      <br></br><br></br>
      <div className="contribute">
        <p>Want to explore more options?</p>
        <Link to="/home">
          <button>Back to Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
