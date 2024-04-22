import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oshPlaza from "../../assets/img/organizers/osh-plaza.png";
import jkYujnyi from "../../assets/img/organizers/jk-yujnyi.png";
import apartment from "../../assets/img/organizers/apartment.png";
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
import file from "../../assets/icons/organizers/file.svg";
import LeftArrow from "../../assets/icons/organizers/arrow-left.svg";
import RightArrow from "../../assets/icons/organizers/arrow-right.svg";
import "./slick.css";
import { Button } from "../UI/Button";

const organizers_info = [
  {
    id: 1,
    image: oshPlaza,
    logo: ihlas,
    hover_logo: hovIhlas,
    title: "ЖК Osh Plaza",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
  },
  {
    id: 2,
    image: jkYujnyi,
    logo: kgGroup,
    hover_logo: hovKgGroup,
    title: "Kg Group",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
  },
  {
    id: 3,
    image: apartment,
    logo: eliteHouse,
    hover_logo: hovEliteHouse,
    title: "Elite House",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
  },
  {
    id: 4,
    image: apartment,
    logo: aalamStroy,
    hover_logo: hovAalamStroy,
    title: "Aalam Stroy",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
  },
  {
    id: 5,
    image: apartment,
    logo: munara,
    hover_logo: hovMunara,
    title: "Munara",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
  },
  {
    id: 6,
    image: apartment,
    logo: tsGroup,
    hover_logo: hovTsGroup,
    title: "Ts Group",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
  },
  {
    id: 7,
    image: apartment,
    logo: avangara,
    hover_logo: hovAvangara,
    title: "Avangara",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
  },
  {
    id: 8,
    image: apartment,
    logo: royal,
    hover_logo: hovRoyal,
    title: "Royal",
    description:
      "ЖК Osh Plaza в Оше будет построен на участке площадь 1,12 га. Здание высотой в 14 этажей имеет классический архитектурный облик, а в отделке его фасадов используются только качественные натуральные материалы.",
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
      <style>
        {`
          @media (max-width: 768px) {
            .slick-arrow.custom-prev-arrow {
              top: 100%;
              transform: translateY(-50%);
            }
          }
        `}
      </style>
      <img src={LeftArrow} alt="Previous" />
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
        zIndex: 1,
        top: "50%",
        right: -60,
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <style>
        {`
          @media (min-width: 768px) {
            .slick-arrow.custom-next-arrow {
              top: 100%;
              transform: translateY(-100%);
            }
          }
        `}
      </style>
      <img src={RightArrow} alt="Next" />
    </button>
  );
};

export const OrganizersInfo = ({
  currentSlide,
  setSelectedOrganizerId,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentOrganizer = organizers_info.find((el) => el.id === currentSlide);
  console.log(currentOrganizer, "currentOrganizer");

  const similarOrganizers = organizers_info
    .filter((el) => el.id !== currentSlide)
    .slice(0, 2);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: windowWidth >= 390,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="md:w-[90%] w-[100%] m-auto my-10">
      <Slider
        {...settings}
        afterChange={(currentSlide) => setSelectedOrganizerId(currentSlide + 1)}
      >
        {currentOrganizer && (
          <div key={currentOrganizer.id}>
            <div key={currentOrganizer.id}>
              <div className="flex lg:flex-row flex-col lg:items-center items-center gap-5 sm:w-full md:w-full">
                <img
                  src={currentOrganizer.image}
                  alt=""
                  className="rounded-2xl w-[600px] md:w-auto"
                />
                <div
                  key={currentOrganizer.id}
                  className="flex flex-col md:w-auto"
                  style={{
                    alignItems: "flex-start",
                    marginLeft: "20px",
                  }}
                >
                  <img src={currentOrganizer.hover_logo} alt="" />
                  <h6 className="font-bold text-[42px] pt-5 pb-3">
                    {currentOrganizer.title}
                  </h6>
                  <p>{currentOrganizer.description}</p>
                  <div className="pt-9">
                    <Button padding="60px">
                      <img src={file} alt="" />
                      Документация от застройщика
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {similarOrganizers.map((organizer) => (
          <div key={organizer.id}>
            <div className="flex lg:flex-row flex-col lg:items-center items-center gap-5 sm:w-full md:w-full">
              <img
                src={organizer.image}
                alt=""
                className="rounded-2xl w-[600px] md:w-auto"
              />
              <div
                className="flex flex-col md:w-auto"
                style={{
                  alignItems: "flex-start",
                  marginLeft: "20px",
                }}
              >
                <img src={organizer.logo} alt="" className="w-40" />
                <h6 className="font-bold text-[42px] pt-5 pb-3">
                  {organizer.title}
                </h6>
                <p>{organizer.description}</p>
                <div className="pt-9">
                  <Button padding="60px">
                    <img src={file} alt="" />
                    Документация от застройщика
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
