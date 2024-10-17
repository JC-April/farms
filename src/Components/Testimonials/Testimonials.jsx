import React from "react";
import "./Testimonials.css";
import quote from "../../assets/quote.png";
import client_1 from "../../assets/client-1.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="all-testimonials">
        <ul className="testimonial">
          <li>
            <img src={quote} alt="quote" className="quote" />
            <div className="client-info">
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu id maecenas
                adipiscing tempus tempor id quam venenatis. Orci eu lacus at
                donec. Mi volutpat augue vivamus lorem justo scelerisque in.
                Malesuada gravida urna pellentesque
              </p>
              <div className="client-bio">
                <img
                  src={client_1}
                  alt="client"
                  className="client"
                  loading="lazy"
                />
                <h3>John Smith</h3>
                <p>Founder of Awesomeux Technology</p>
              </div>
            </div>
          </li>

          <li>
            <img src={quote} alt="quote" className="quote" />
            <div className="client-info">
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu id maecenas
                adipiscing tempus tempor id quam venenatis. Orci eu lacus at
                donec. Mi volutpat augue vivamus lorem justo scelerisque in.
                Malesuada gravida urna pellentesque
              </p>
              <div className="client-bio">
                <img
                  src={client_1}
                  alt="client"
                  className="client"
                  loading="lazy"
                />
                <h3>Alvin Gap</h3>
                <p>Team Lead QEP AgroTech</p>
              </div>
            </div>
          </li>

          <li>
            <img src={quote} alt="quote" className="quote" />
            <div className="client-info">
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu id maecenas
                adipiscing tempus tempor id quam venenatis. Orci eu lacus at
                donec. Mi volutpat augue vivamus lorem justo scelerisque in.
                Malesuada gravida urna pellentesque
              </p>
              <div className="client-bio">
                <img
                  src={client_1}
                  alt="client"
                  className="client"
                  loading="lazy"
                />
                <h3>Roland Griffin</h3>
                <p>Founder AgroNig Robotics</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
