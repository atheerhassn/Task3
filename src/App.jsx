import { useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import NavigationSection from './components/NavigationSection';
import TestimonialsSection from './components/TestimonialsSection';
import Header from './components/Header';
import { Route, Routes, Link } from 'react-router-dom';
import About from './Page/About';
import Home from './Page/Home.jsx'
import './Page/Slider.jsx';
import Academics from './Page/Academics.jsx';
import { FaBars } from 'react-icons/fa';
import Slider from './Page/Slider.jsx';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header>
      <nav>
          <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/student-life">Student Life</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button className="burger_menu" onClick={toggleMenu}>
            <FaBars />
          </button>
        </nav>
      </Header>
      

      
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <BenefitsSection />
              <TestimonialsSection />
              <FAQSection />
              <NavigationSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          
        </Routes>
      

      <Footer />
    </>
  );
};

export default App;

//بالاب بكرا الروتس 