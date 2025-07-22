import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Service from './Service'; // Importing the service component
import Footer from './Footer';
import ContactSection from './ContactSection'; //
import FAQSection from './FAQSection'; // Importing the FAQ section
import WellBeingResources from './WellBeingResources';// Importing the services component
import Testimonials from './Testimonals';
export default function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
   <Service/>
   <Testimonials/>
   <WellBeingResources/>
   <FAQSection/>
    <ContactSection/>
    <Footer/>

    </div>
  );
}
