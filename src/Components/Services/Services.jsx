import React, { useRef } from "react";
import "./Services.css";
import service_1 from "../../assets/services-1.png";
import service_2 from "../../assets/services-2.png";
import service_3 from "../../assets/services-3.png";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Services = () => {
  const slider = useRef();
  let translateX = 0;

  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  const slideBackwards = () => {
    if (translateX < 0) {
      translateX += 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <div className="services">
      <div className="header">
        <h2>Our Services</h2>
        <h3>We have tailored solutions for every farm</h3>
      </div>

      <div className="service-slider">
        <img
          src={next_icon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackwards}
        />

        <div className="slider">
          <ul ref={slider}>
            <li>
              <img
                src={service_1}
                alt="service image"
                className="service-imagee"
              />
              <div className="service-text">
                <h3>Precision Agriculture</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Arcu id maecenas
                  adipiscing tempus tempor id quam venenatis. Orci eu lacus at
                  donec. Mi volutpat augue vivamus lorem justo scelerisque in.
                  Malesuada
                </p>
                <button className="btn">Read More</button>
              </div>
            </li>

            <li>
              <img
                src={service_2}
                alt="service image"
                className="service-imagee"
              />
              <div className="service-text">
                <h3>Organic Farming Input</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Arcu id maecenas
                  adipiscing tempus tempor id quam venenatis. Orci eu lacus at
                  donec. Mi volutpat augue vivamus lorem justo scelerisque in.
                  Malesuada
                </p>
                <button className="btn">Read More</button>
              </div>
            </li>

            <li>
              <img
                src={service_3}
                alt="service image"
                className="service-imagee"
              />
              <div className="service-text">
                <h3>Smart Irrigation Systems</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Arcu id maecenas
                  adipiscing tempus tempor id quam venenatis. Orci eu lacus at
                  donec. Mi volutpat augue vivamus lorem justo scelerisque in.
                  Malesuada
                </p>
                <button className="btn">Read More</button>
              </div>
            </li>

            <li>
              <img
                src={service_3}
                alt="service image"
                className="service-imagee"
              />
              <div className="service-text">
                <h3>Crop Management</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Arcu id maecenas
                  adipiscing tempus tempor id quam venenatis. Orci eu lacus at
                  donec. Mi volutpat augue vivamus lorem justo scelerisque in.
                  Malesuada
                </p>
                <button className="btn">Read More</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
