// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking'; // Import the Booking page
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book-slot/:serviceName" element={<Booking />} /> {/* Add the route for Booking */}
      </Routes>
    </Router>
  );
}

export default App;
