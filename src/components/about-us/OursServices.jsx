import setting from "../../assets/icons/about-us/setting.svg";
import project from "../../assets/icons/about-us/project.svg";
import rent from "../../assets/icons/about-us/rent.svg";
import exportt from "../../assets/icons/about-us/export.svg";
import consulting from "../../assets/icons/about-us/consulting.svg";
import makeProject from "../../assets/icons/about-us/make-project.svg";

const services_data = [
  {
    id: 1,
    title: "Ремонт под ключ",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
    icon: setting,
    backgroundColor: "#D0E2768F",
  },
  {
    id: 2,
    title: "Составление смет на строительные и проектные работы ",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
    icon: project,
    backgroundColor: "#91CA9A54",
  },
  {
    id: 3,
    title: "Аренда недвижимости",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
    icon: rent,
    backgroundColor: "#67CEB66E",
  },
  {
    id: 4,
    title:
      "Правовая экспертиза строящихся объектов перед продажей недвижимости застройщиков и нотариальные услуги",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
    icon: exportt,
    backgroundColor: "#91CA9A54",
  },
  {
    id: 5,
    title:
      "Проверка, консультация и получение правоустанавливающих, правоудостоверяющих документов на недвижимое имущество",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
    icon: consulting,
    backgroundColor: "#D0E2768F",
  },
  {
    id: 6,
    title: "Изготовление проектов или проектирование объектов ",
    description:
      "Мы берем на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
    icon: makeProject,
    backgroundColor: "#67CEB66E",
  },
  {
    id: 7,
    title: "Приём заявок на продажу земельных участков под строительство",
    description:
      "Мы берём на себя все этапы работ: от разработки дизайн-проекта и закупки материалов до выполнения строительных и отделочных работ.",
    icon: makeProject,
    backgroundColor: "#D0E2768F",
  },
];

export const OursServices = () => {
  return (
    <div className="s: mt-16">
      <h2 className="font-bold sm:text-[48px] text-[24px] uppercase text-[#45651C]">
        Наши услуги
      </h2>
      <hr className="bg-[#45651C] h-[2px] font-bold" />
      <ul className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2  grid-rows-3  mt-8">
        {services_data.map((el) => (
          <li
            key={el.id}
            style={{ background: el.backgroundColor }}
            className="flex flex-col items-start gap-5 py-6 px-8  rounded-[40px]"
          >
            <div className="bg-[#45651C] p-3 rounded-full">
              <img src={el.icon} alt="" />{" "}
            </div>
            <div>
              <h6 className="text-[#45651C] font-semibold text-[22px] pb-2">
                {el.title}
              </h6>
              <p className="text-[#2D2D2D]">{el.description}</p>
            </div>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
};
