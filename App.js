import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Confirmation from './components/Confirmation';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingData, setBookingData] = useState({});

  const handleLogin = (username, password) => {
    if (username === 'Admin' && password === '123') {
      setCurrentPage('booking');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleBooking = (data) => {
    setBookingData(data);
    setCurrentPage('confirmation');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'booking':
        return <BookingForm onBooking={handleBooking} />;
      case 'about':
        return <About />;
      case 'confirmation':
        return <Confirmation bookingData={bookingData} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header onNavClick={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
