import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/image6.jpg";
import ImageTwo from "../../images/image7.jpg";
import ImageThree from "../../images/image8.jpg";
import ImageFour from "../../images/image9.jpg";
import ImageFive from "../../images/image10.jpg";
import ImageEleven from "../../images/image11.jpg";
import ImageTwelve from "../../images/image12.jpg";
import ImageThirteen from "../../images/image13.jpg";
import ImageFourteen from "../../images/image14.jpg";
import ImageFifteen from "../../images/image15.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "",
    image: ImageFour,

    link: "",
  },
  {
    id: 3,
    name: "",
    image: ImageFive,
    link: "",
  },

  {
    id: 2,
    name: "",
    image: ImageEleven,
    link: "",
  },
  {
    id: 3,
    name: "",
    link: "",
    image: ImageTwelve,
  },
  {
    id: 2,
    name: "",
    image: ImageThirteen,
    link: "",
  },
  {
    id: 2,
    name: "",
    image: ImageFourteen,

    link: "",
  },
  {
    id: 3,
    name: "",
    image: ImageFifteen,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Gallery"
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
