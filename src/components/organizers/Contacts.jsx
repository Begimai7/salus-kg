import phone from "../../../public/assets/icons/organizers/phone.svg";
import facebook from "../../../public/assets/icons/contacts/facebook.svg";
import instagram from "../../../public/assets/icons/contacts/instagram.svg";
import whatsapp from "../../../public/assets/icons/contacts/whatsapp.svg";
import telegram from "../../../public/assets/icons/contacts/telegram.svg";
import tiktok from "../../../public/assets/icons/contacts/tiktok.svg";
import gmail from "../../../public/assets/icons/contacts/gmail.svg";
import location from "../../../public/assets/icons/contacts/location.svg";
import map from "../../../public/assets/img/map.png";

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

export const Contacts = () => {
  return (
    <div>
      {" "}
      <h2 className="font-bold md:text-[48px] text-[24px] uppercase text-[#45651C] md: mt-7">
        Контакты
      </h2>
      <hr className="bg-[#45651C] h-[2px] font-bold" />
      <div className="flex md:flex-row flex-col md: gap-6 justify-between items-center mt-7">
        <div className="flex flex-col items-start gap-7">
          <ul className="flex flex-col gap-3">
            <li className="flex justify-center gap-2">
              <img src={phone} alt="" />{" "}
              <span className="text-[#337FFF]">(+996) 000 00 00 00</span>
            </li>
            <li className="flex justify-center gap-2">
              <img src={phone} alt="" />{" "}
              <span className="text-[#337FFF]">(+996) 000 00 00 00</span>
            </li>
          </ul>
          <ul className="flex gap-6">
            {social_icons.map((el) => (
              <li key={el.id}>
                <img src={el.icon} alt="" />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-[22px] text-[#45651C]">
              График работы
            </h6>
            <p className="text-[18px]">
              {" "}
              <span className="font-bold">Пн-Пт: </span> 09:00-19:30
            </p>
            <p className="text-[18px]">
              {" "}
              <span className="font-bold">Сб-Вс: </span> Выходной
            </p>
          </div>
          <div className="flex gap-2 text-[#45651C] font-semibold text-[18px]">
            <img src={location} alt="" />
            <span className="underline "> Посмотреть адрес на карте</span>
          </div>
        </div>
        <div>
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};
