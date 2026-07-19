import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import navLinks from "../../data/NavLinks";
import logo from "../../assets/images/driftly-logo.png";
import BookingModal from "../BookingModal/BookingModal";

const Navbar = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Driftly" />
        </Link>
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="book-btn " onClick={() => setIsBookingOpen(true)}>
            Book Now
          </button>
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
          />
        </nav>
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
