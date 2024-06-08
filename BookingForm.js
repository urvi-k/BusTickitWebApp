import React, { useState } from 'react';

function BookingForm({ onBooking }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [route, setRoute] = useState('');
  const [seatPreference, setSeatPreference] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBooking({ name, email, route, seatPreference, date });
  };

  return (
    <div className="container">
      <h2>GRT Integrated Booking Platform</h2>
      <p>Book your rides conveniently online. Please fill out the form below:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label htmlFor="route">Route:</label>
        <select id="route" value={route} onChange={(e) => setRoute(e.target.value)} required>
          <option value="" disabled>Select a route</option>
          <option value="Route 1">Route 1: Downtown to Uptown</option>
          <option value="Route 2">Route 2: East Side to West Side</option>
          <option value="Route 3">Route 3: North End to South End</option>
          <option value="Route 4">Route 4: City Center Loop</option>
        </select>

        <label htmlFor="seatPreference">Seat Preference:</label>
        <select id="seatPreference" value={seatPreference} onChange={(e) => setSeatPreference(e.target.value)} required>
          <option value="" disabled>Select a preference</option>
          <option value="Window">Window</option>
          <option value="Aisle">Aisle</option>
        </select>
        
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
