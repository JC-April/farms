import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Video from "./Components/Video/Video";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Services />
      </div>
      <Testimonials />

      <div className="container">
        <Contact />
      </div>

      <Video />

      <div className="container">
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default App;
