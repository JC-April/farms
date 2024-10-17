import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="" className="nav-logo" />
      </Link>
      <ul>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="home"
          >
            Home
          </Link>
        </li>

        <li>
          {" "}
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-100} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-100} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-100} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
      <button className="btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
