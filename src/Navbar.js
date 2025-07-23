// import React from 'react'; 
// import './Navbar.css';
// import { FaHeadphonesAlt, FaEnvelope } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h1 className="logo">Kognos</h1>
//         <ul className="nav-links">
//           <li><a href="#welcome-section">home</a></li>
//           <li><a href="#about-section">about</a></li> 
//           <li><a href="services-section">services</a></li>
//           <li><a href="#therapist">therapist</a></li>
//         </ul>
//       </div>

//       <div className="navbar-right">
//         <div className="nav-icon">
//           <a href="#contact-container">
//             <FaHeadphonesAlt className="icon" />
//             <span>Get in touch</span>
//           </a>
//         </div>
//         <div className="nav-icon">
//           <a href="#message">
//             <FaEnvelope className="icon" />
//             <span>message</span>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import './Navbar.css';
import { FaHeadphonesAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Kognos</h1>
        <ul className="nav-links">
          <li><a href="#welcome-container">home</a></li>
          <li><a href="#mental-health  ">about</a></li>
          <li><a href="#services-section">services</a></li>
          <li><a href="#therapy-section">therapist</a></li>  
        </ul>
      </div>

      <div className="navbar-right">
        <div className="nav-item">
          <a href="#contact">
            <FaHeadphonesAlt className="icon" />
            <span>Get in touch</span>
          </a>
        </div>
        <div className="nav-item">
          <a href="#contact-section ">
            <FaEnvelope className="icon" />
            <span>message</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
