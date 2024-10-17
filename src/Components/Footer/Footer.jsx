import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import fb_icon from "../../assets/fb-icon.png";
import insta_icon from "../../assets/insta-icon.png";
import globe from "../../assets/globe.png";
import location from "../../assets/location-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <ul className=" container footer-ul">
        <li className="footer-1">
          <img src={logo} alt="logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada gravida urna
            pellentesque turpis magna. Semper neque eu velit aliquam in augue
            ullamcorper nisl
          </p>
          <div className="many">
            <img src={fb_icon} alt="facebook" />
            <img src={insta_icon} alt="instagram" />
            <img src={globe} alt="globe" />
          </div>
        </li>
        <li className="explore">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our projects</li>
            <li>Latest News</li>
          </ul>
        </li>
        <li className="others">
          <h3>Others</h3>
          <ul>
            <li>Testimonial</li>
            <li>Benefit</li>
            <li>Meet the farmers</li>
          </ul>
        </li>
        <li className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li className="footer-contact-list">
              <img src={phone} alt="phone icon" />
              <p>08053789452</p>
            </li>
            <li className="footer-contact-list">
              <img src={mail} alt="mail icon" />
              <p>Farmsol@servicemail.com</p>
            </li>
            <li className="footer-contact-list">
              <img src={location} alt="location icon" />
              <p>
                Plot 345 Trans Amadi Industrial Layout, <br /> Port Harcourt,
                Rivers State
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
