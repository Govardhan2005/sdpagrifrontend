import React, { useState } from 'react';
import Appbar from './Appbar';
import './HomePage.css';

const Home = () => {
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [registerDropdown, setRegisterDropdown] = useState(false);

  const toggleLoginDropdown = () => setLoginDropdown(!loginDropdown);
  const toggleRegisterDropdown = () => setRegisterDropdown(!registerDropdown);

  return (
    <div>
      <div>
        <Appbar />
      </div>
      
      {/* Banner Section with Background Image */}
      <section className="banner">
        <h2>Farm goods to valuable products</h2>
        
      </section>


      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>

      {/* CSS Styles */}
     
    </div>
  );
};

export default Home;
