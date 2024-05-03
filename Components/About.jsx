import React from "react";
import { useLocation } from "react-router-dom";
import "../Style/About.css";
import Expert1 from "./Expert1";
import Support from "./Support";

const AboutUs = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/About";

  return (
    <>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-left">
            <p>About Us</p>
            <h1>
              Building greater futures through innovation and collective
              knowledge
            </h1>
            <p>
              "At the forefront of technological innovation, we specialize in
              revolutionizing healthcare, manufacturing, and business
              intelligence. Our expertise spans from deploying computer vision
              and speech technology-based deep learning models to integrating
              Industry 4.0 standards in manufacturing, and harnessing data
              science for strategic decision-making. With a commitment to
              excellence and sustainability, we deliver tailor-made solutions
              that address the most pressing challenges, ensuring high accuracy,
              efficiency, and actionable insights for businesses and communities
              worldwide."
            </p>
            <p>
              "We envision a world where advanced technology is a catalyst for
              positive change, making healthcare more accessible, manufacturing
              more efficient, and business strategies more data-driven. Our goal
              is to bridge the gap between current challenges and future
              possibilities, transforming industries through innovation and
              intelligence. By pioneering solutions that are sustainable,
              scalable, and impactful, we aim to empower organizations and
              individuals to achieve their highest potential, fostering a future
              where progress and prosperity are within everyone's reach."
            </p>

            <div className="clock-logo">
              <i className="fa-solid fa-clock-rotate-left"></i> ....
              <h3>Expert skills</h3>
            </div>

            <div className="one">
              <p>
                <i class="fa-solid fa-check"></i>"AI and Machine Learning"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Cloud Computing"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Cybersecurity"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Data and Analytics"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Full-Stack Development"
              </p>
              <p>
                <i class="fa-solid fa-check"></i>"Custom Software Development"
              </p>
            </div>
          </div>

          <div className="about-right">
            <img src="/About-1.jpg" alt="" />
            {/* <img src="./Assets/About-2.jpg" alt="" /> */}
          </div>
        </div>
      </div>
      <>
        <Expert1 />
        <Support />
      </>
    </>
  );
};

export default AboutUs;
