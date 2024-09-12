import React, { useState } from 'react';
import './Home.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; 

const services = [
  { name: 'Haircutting', description: 'Trimming or styling hair to achieve desired lengths and shapes.' },
  { name: 'Hair care', description: 'Routine maintenance and treatments to improve the health and appearance of hair.' },
  { name: 'Highlights', description: ': Styling hair into woven patterns for a decorative and practical look.' },
  { name: 'Braids', description: 'Effective sanitizers to keep your hands clean.' },
  { name: 'Manicure', description: '  Creative designs and decorations applied to nails, including patterns, glitter, and decals.' },
  { name: 'Nail Art', description: 'Artificial nails created using a combination of liquid acrylic and powder to extend and enhance natural nails.' },
  { name: 'Gel Nails', description: 'Fresh fruits and veggies from farm to your doorstep.' },

];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home">
      <h1>Ready to get pampered?</h1>
      <p>Our new salon is the place where beauty meets relaxation. Come in and let us make you shine—because you deserve to look as fabulous as you feel!".</p>
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
      
      <div className="contribute">
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
