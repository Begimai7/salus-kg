import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ihlas from "../../assets/icons/organizers/ihlas.svg";
import kgGroup from "../../assets/icons/organizers/kg-group.svg";
import eliteHouse from "../../assets/icons/organizers/elite-house.svg";
import aalamStroy from "../../assets/icons/organizers/aalam-stroy.svg";
import munara from "../../assets/icons/organizers/munara.svg";
import tsGroup from "../../assets/icons/organizers/ts-group.svg";
import avangara from "../../assets/icons/organizers/avangara.svg";
import royal from "../../assets/icons/organizers/royal.svg";
import hovIhlas from "../../assets/icons/organizers/hover-icons/ihlas.svg";
import hovKgGroup from "../../assets/icons/organizers/hover-icons/kg-group.svg";
import hovEliteHouse from "../../assets/icons/organizers/hover-icons/elite-house.svg";
import hovAalamStroy from "../../assets/icons/organizers/hover-icons/aalam-stroy.svg";
import hovMunara from "../../assets/icons/organizers/hover-icons/munara.svg";
import hovTsGroup from "../../assets/icons/organizers/hover-icons/ts-group.svg";
import hovAvangara from "../../assets/icons/organizers/hover-icons/avangara.svg";
import hovRoyal from "../../assets/icons/organizers/hover-icons/royal.svg";

import LeftArrow from "../../assets/icons/organizers/arrow-left.svg";
import RightArrow from "../../assets/icons/organizers/arrow-right.svg";
import "./slick.css";
import { OrganizersInfo } from "./OrganizerInfo";
import { Application } from "./Application";
import { Contacts } from "./Contacts";
import { useEffect, useRef, useState } from "react";

const organizers = [
  {
    id: 1,
    logo: ihlas,
    hover_logo: hovIhlas,
  },
  {
    id: 2,
    logo: kgGroup,
    hover_logo: hovKgGroup,
  },
  {
    id: 3,
    logo: eliteHouse,
    hover_logo: hovEliteHouse,
  },
  {
    id: 4,
    logo: aalamStroy,
    hover_logo: hovAalamStroy,
  },
  {
    id: 5,
    logo: munara,
    hover_logo: hovMunara,
  },
  {
    id: 6,
    logo: tsGroup,
    hover_logo: hovTsGroup,
  },
  {
    id: 7,
    logo: avangara,
    hover_logo: hovAvangara,
  },
  {
    id: 8,
    logo: royal,
    hover_logo: hovRoyal,
  },
];
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="slick-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        zIndex: 1,
        top: "50%",
        left: -60,
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <img src={LeftArrow} alt="Next" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="slick-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        top: "50%",
        right: -60,
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <img src={RightArrow} alt="Next" />
    </button>
  );
};

export const Organizers = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOrganizerId, setSelectedOrganizerId] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: windowWidth >= 640,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const goToSlide = (id) => {
    setCurrentSlide(id);
    setSelectedOrganizerId(id);
    sliderRef.current.slickGoTo(id - 1);
  };
  return (
    <div className="w-full flex flex-col gap-7">
      <h2 className="font-semibold md:text-[48px] text-[24px]  uppercase text-[#45651C]">
        Застройщики
      </h2>
      <hr className="bg-[#45651C] h-[2px] font-bold" />

      <div className="md:w-[90%] w-[80%] m-auto my-14">
        <Slider className="organizers-slider" {...settings} ref={sliderRef}>
          {organizers.map((el) => (
            <div
              key={el.id}
              className="flex justify-center items-center "
              onClick={() => goToSlide(el.id)}
              style={{ outline: "none" }}
            >
              <img
                className="outline-none"
                src={selectedOrganizerId === el.id ? el.hover_logo : el.logo}
              />
            </div>
          ))}
        </Slider>
      </div>
      <OrganizersInfo
        currentSlide={currentSlide}
        setSelectedOrganizerId={setSelectedOrganizerId}
        selectedOrganizerId={selectedOrganizerId}
      />
      <Application />
      <Contacts />
    </div>
  );
};
