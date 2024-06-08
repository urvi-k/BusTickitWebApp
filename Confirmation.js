import React from 'react';

function Confirmation({ bookingData }) {
  return (
    <div className="container">
      <h2>Thank You for Choosing GRT Integrated Booking Platform</h2>
      <p>Booking successfully completed. Happy Commute!</p>
      <p><strong>Name:</strong> {bookingData.name}</p>
      <p><strong>Email:</strong> {bookingData.email}</p>
      <p><strong>Route:</strong> {bookingData.route}</p>
      <p><strong>Seat Preference:</strong> {bookingData.seatPreference}</p>
      <p><strong>Date:</strong> {bookingData.date}</p>
    </div>
  );
}

export default Confirmation;
