import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { items } from "../Builders.helpers";
// import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ihlas from "../../../public/assets/icons/organizers/ihlas.svg";
import kgGroup from "../../../public/assets/icons/organizers/kg-group.svg";
import eliteHouse from "../../../public/assets/icons/organizers/elite-house.svg";
import aalamStroy from "../../../public/assets/icons/organizers/aalam-stroy.svg";
import munara from "../../../public/assets/icons/organizers/munara.svg";
import tsGroup from "../../../public/assets/icons/organizers/ts-group.svg";
import avangara from "../../../public/assets/icons/organizers/avangara.svg";
import royal from "../../../public/assets/icons/organizers/royal.svg";
import hovIhlas from "../../../public/assets/icons/organizers/hover-icons/ihlas.svg";
import hovKgGroup from "../../../public/assets/icons/organizers/hover-icons/kg-group.svg";
import hovEliteHouse from "../../../public/assets/icons/organizers/hover-icons/elite-house.svg";
import hovAalamStroy from "../../../public/assets/icons/organizers/hover-icons/aalam-stroy.svg";
import hovMunara from "../../../public/assets/icons/organizers/hover-icons/munara.svg";
import hovTsGroup from "../../../public/assets/icons/organizers/hover-icons/ts-group.svg";
import hovAvangara from "../../../public/assets/icons/organizers/hover-icons/avangara.svg";
import hovRoyal from "../../../public/assets/icons/organizers/hover-icons/royal.svg";

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
const OrganizationsSlider = () => {
  const swiperRef = useRef(null);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const updateNavigationState = (swiper) => {
    setPrevDisabled(swiper.isBeginning);
    setNextDisabled(swiper.isEnd);
  };

  useEffect(() => {
    const swiper1 = swiperRef.current?.swiper;

    if (swiper1) {
      swiper1.on("slideChange", () => updateNavigationState(swiper1));

      updateNavigationState(swiper1);
    }

    return () => {
      swiper1?.off("slideChange");
    };
  }, []);

  const CustomPrevArrow = () => {
    return (
      <img
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
        }}
        className="organization-arrow organization-arrow-prev hidden lg-md:block"
        src={`/src/assets/icons/arrow-left-circle${
          prevDisabled ? "-disabled" : ""
        }.svg`}
      />
    );
  };

  const CustomNextArrow = () => (
    <img
      onClick={() => {
        swiperRef.current.swiper.slideNext();
      }}
      className="organization-arrow organization-arrow-next hidden lg-md:block"
      src={`/src/assets/icons/arrow-right-circle${
        nextDisabled ? "-disabled" : ""
      }.svg`}
    />
  );

  return (
    <div className="organizationSlider">
      <Swiper
        ref={swiperRef}
        navigation={{
          nextEl: "organization-arrow organization-arrow-next",
          prevEl: "organization-arrow organization-arrow-prev",
        }}
        breakpoints={{
          390: {
            navigation: false,
            slidesPerView: 4,
          },
          992: {
            navigation: true,
            slidesPerView: 5,
          },
        }}
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
      >
        {organizers.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.logo} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPrevArrow />
      <CustomNextArrow />
    </div>
  );
};

export default OrganizationsSlider;
