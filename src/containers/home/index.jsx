import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import ImageSix from "../../images/png.png";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, It's me
          <br />
          Perly Mascariola
          <p>
            Join me on this portfolio as I share my thoughts, experiences, <br /> and
            a sprinkle of gaming magic, <br /> all while chasing my dreams and
            finding beauty in the virtual and real worlds alike.
          </p>
        </h1>
        
      </div>
      
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
      
      </Animate>
    </section>
  );
};

export default Home;
