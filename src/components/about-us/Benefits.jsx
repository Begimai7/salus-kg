import { useEffect, useState } from "react";
import benefitsImage from "../../../public/assets/img/benefits.png";
import { GoDotFill } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const benefit_data = [
  {
    id: 1,
    title: "Изучение правовой оценки",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
  },
  {
    id: 2,
    title: "Огромная база строящихся объектов",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
  },
  {
    id: 3,
    title: "Проверенные и прямые цены застройщика",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
  },
];

export const Benefits = () => {
  const [activeId, setActiveId] = useState([]);
  console.log(activeId, "nn");
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, [activeId]);

  const openBenefitsText = (id) => {
    setActiveId((prevIds) => {
      const index = prevIds.indexOf(id);

      if (index !== -1) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };
  return (
    <div>
      <h2 className="font-bold md:text-[48px] text-[24px] uppercase text-[#45651C]">
        Преимущества работы с нами
      </h2>
      <hr className="bg-[#45651C] h-[2px] font-bold" />
      <div className="flex md:items-center items-start lg:flex-row flex-col lg:gap-10 gap-5 md:mt-7 mt-4">
        <img
          className="lg:w-[532px] w-full lg:h-[688px] h-[294px] sm: object-cover rounded-[30px]"
          src={benefitsImage}
          alt=""
        />
        <ul className="w-4/5 flex flex-col sm:gap-9 gap-6">
          {benefit_data.map((el) => (
            <li
              key={el.id}
              className={`flex ${
                activeId.includes(el.id) ? "items-start" : "items-center"
              } ml-0 md:gap-5 gap-1 hover:text-[#45651C] ${
                activeId.includes(el.id)
                  ? "text-[#45651C] transition-opacity duration-600 ease-in-out"
                  : "text-[#BBDA81]"
              } transition-colors  duration-500 ease-in-out`}
              onClick={() => openBenefitsText(el.id)}
            >
              <span
                className={` ${
                  activeId.includes(el.id)
                    ? "text-[#45651C] "
                    : "text-[#DFDFDF]"
                } text-3xl lg:pt-3 transition-colors  duration-500 ease-in-out`}
              >
                <GoDotFill />
              </span>
              <div>
                <p
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="lg:text-[36px] sm:text-[24px] text-[18px] font-semibold m-0 p-0"
                >
                  {el.title}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className={`text-[#545454] text-[16px]  m-0 p-0 font-normal w-[70%] transition-opacity duration-500 ease-in-out  ${
                    activeId.includes(el.id)
                      ? "block opacity-100"
                      : "hidden opacity-0"
                  }`}
                >
                  {" "}
                  {el.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
