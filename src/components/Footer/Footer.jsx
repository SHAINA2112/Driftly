import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPaperPlane,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            Driftly
          </Link>
          <p>
            Travel beautifully. Explore confidently. Create memories with
            Driftly.
          </p>
          <div className="footer-contact">
            <span>
              <FaLocationDot />
              123 Travel Avenue, Islamabad, Pakistan
            </span>
            <span>
              <FaPhone />
              +92 300 1234567
            </span>
            <span>
              <FaEnvelope />
              driftly@gmail.com
            </span>
          </div>
          <div className="footer-social">
            <a
              href="jttps://www.facebook.com/driftlytravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/driftlytravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/driftlytravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/driftlytravel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/gallery">Gallery</Link>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links">
          <h3>Destinations</h3>
          <a href="/destinations">Switzerland</a>
          <a href="destinations">Maldives</a>
          <a href="destinations">Bali</a>
          <a href="destinations">Dubai</a>
          <a href="destinations">Hunza</a>
        </div>
        <div className="footer-links">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Help Center</a>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>
            Get exclusive travel offers and destination inspiration every week.
          </p>
          <form>
            <input type="email" placeholder="Your email" />
            <button>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Driftly. All Rights Reserved.</p>
        <div>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
