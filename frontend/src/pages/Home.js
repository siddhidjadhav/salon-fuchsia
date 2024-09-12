import React, { useState } from 'react';
import './Home.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; 

const services = [
  { name: 'Haircutting', description: 'Trimming or styling hair to achieve desired lengths and shapes.' },
  { name: 'Hair care', description: 'Routine maintenance and treatments to improve the hair.' },
  { name: 'Highlights', description: 'Styling hair into woven patterns for a decorative and practical look.' },
  { name: 'Braids', description: 'Get beautifully braided, where style meets tradition!.' },
  { name: 'Manicure', description: '  Creative designs and decorations applied to nails, including patterns.' },
  { name: 'Nail Art', description: 'Artificial nails to extend and enhance natural nails.' },
 

];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home">
      <h1>Ready to get pampered?</h1>
      <p>Come in and let us make you shine.</p>
      <div className="services">
        {services.map((service, index) => (
          <Link to={`/book-slot/${service.name}`} key={index} style={{ textDecoration: 'none' }}>
            <div className="service">
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <br></br><br></br>
      <div className="gth">
        <Link to="/">
          <button className="gth-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
