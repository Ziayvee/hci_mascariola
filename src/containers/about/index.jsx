import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import ImageSix from "../../images/png.png";


const personalDetails = [
  {
    label: "Name",
    value: "Perly P. Mascariola",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Purok 1, Sudlon, Barobo, Surigao del sur",
  },
  {
    label: "Email",
    value: "mascariolaperly@gmail.com",
  },
  {
    label: "Contact No",
    value: "+639-670-796-673",
  },
];

const jobSummary =
  <p>I'm Perly Petilo Mascariola, A 24-year-old hailing from the enchanting town of Barobo, Surigao del Sur. Born on a crisp February 12th, 2000, in the bustling neighborhood of Batasan Hills, Quezon City, my journey through life has been nothing short of an exhilarating adventure. Currently, I am a student at the North Eastern Mindanao State University, where I am pursuing a Bachelor of Science in Computer Science. Nestled amidst the lush landscapes of Surigao, my academic pursuits have ignited a passionate curiosity within me, propelling me toward the exciting realm of technology and innovation.
"</p>

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(0px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Welcome to my Portfolio!</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(0px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(0px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div className="service-icon">
                <img src={ImageSix} alt="Image 6" />
              </div>

              
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
