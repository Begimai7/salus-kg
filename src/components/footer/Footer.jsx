import { Container } from "../UI/Container";
import { nav_list } from "../utils/constants/contants";
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import whatsapp from "../../assets/icons/footer/whatsapp.svg";
import telegram from "../../assets/icons/footer/telegram.svg";
import tiktok from "../../assets/icons/footer/tiktok.svg";
import gmail from "../../assets/icons/footer/gmail.svg";

const social_icons = [
  {
    id: 1,
    icon: facebook,
  },
  {
    id: 2,
    icon: instagram,
  },
  {
    id: 3,
    icon: whatsapp,
  },
  {
    id: 4,
    icon: telegram,
  },
  {
    id: 5,
    icon: tiktok,
  },
  {
    id: 6,
    icon: gmail,
  },
];

export const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col sm:items-center justify-start gap-6 m-9 ">
        <ul className="flex sm:flex-row flex-col  gap-5">
          {nav_list.map((el) => (
            <li
              className="font-medium text-[16px] hover:text-[#45651C]  hover:font-bold"
              key={el.id}
            >
              {el.name}
            </li>
          ))}
        </ul>
        <ul className="flex gap-6">
          {social_icons.map((el) => (
            <li key={el.id}>
              <img src={el.icon} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
