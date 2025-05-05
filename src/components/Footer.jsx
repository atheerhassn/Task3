import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo-area">
            <div className="logo">
              <FaGraduationCap size={32} color="#FF8D6B" />
              <h2>Little Learners Academy</h2>
            </div>
            <p className="footer-desc">
              A place to nurture curiosity, creativity, and confidence in young minds. Join our family and give your child the gift of lifelong learning.
            </p>
            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-icon"><FaMapMarkerAlt /></span>
                123 Education Street, Learning City
              </div>
              <div className="contact-row">
                <span className="contact-icon"><FaEnvelope /></span>
                info@littlelearners.com
              </div>
              <div className="contact-row">
                <span className="contact-icon"><FaPhone /></span>
                (123) 456-7890
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Our Programs</Link></li>
              <li><Link to="/teachers">Our Teachers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">About Us</h4>
            <ul className="footer-links">
              <li><Link to="/mission">Our Mission</Link></li>
              <li><Link to="/philosophy">Our Philosophy</Link></li>
              <li><Link to="/values">Our Values</Link></li>
              <li><Link to="/history">Our History</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Academics</h4>
            <ul className="footer-links">
              <li><Link to="/curriculum">Curriculum</Link></li>
              <li><Link to="/programs">Special Programs</Link></li>
              <li><Link to="/tour">Virtual Tour</Link></li>
              <li><Link to="/activities">Enrichment Activities</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links">
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/feedback">Give Feedback</Link></li>
              <li><Link to="/directions">Find Directions</Link></li>
              <li><Link to="/request-info">Request Info</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links-bottom">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
          
          <div>Copyright © {new Date().getFullYear()} Little Learners Academy. All rights reserved.</div>
          
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;