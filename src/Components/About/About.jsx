import React from "react";
import "./About.css";
import left_about from "../../assets/left-about-image.png";
import right_about from "../../assets/right-about-image.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h2>About Us</h2>
        <h3>"Our Commitment to Agriculture"</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
          tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
          augue vivamus lorem justo scelerisque in. Malesuada gravida urna
          pellentesque turpis magna. Semper neque eu velit aliquam in augue
          ullamcorper nisl. Et dolor urna sollicitudin praesent metus facilisis.
          Dui tellus habitasse mi aliquet consequat eget. Interdum semper fames
          consequat nisl varius fermentum elit. In et suscipit ullamcorper augue
          ac nullam porttitor elit amet. Orci cras malesuada ac sit hendrerit
          tellus fringilla risus. Turpis ultricies libero lobortis in viverra.
          Arcu imperdiet sapien mauris posuere. Suspendisse molestie senectus
          tincidunt laoreet tellus et velit faucibus dictum. Lectus nunc proin
          rhoncus elit non.
        </p>
        <button className="btn">Learn More</button>
      </div>

      <div className="about-right">
        <img src={left_about} alt="" className="left" />
        <img src={right_about} alt="" className="right" />
      </div>
    </div>
  );
};

export default About;
