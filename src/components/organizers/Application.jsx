import applicationBg from "../../assets/img/organizers/application-bg.png";
import phone from "../../assets/icons/organizers/phone.svg";
import { Button } from "../UI/Button";
import { useState } from "react";
import { SentSuccessfully } from "../UI/SentSuccessfully";

export const Application = () => {
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const sentSuccessfullyHandler = () => {
    setSentSuccessfully(true);
  };
  const closeHandler = () => {
    setSentSuccessfully(false);
  };

  return (
    <>
      <div className="relative">
        {sentSuccessfully && <SentSuccessfully closeModal={closeHandler} />}
      </div>
      <div>
        <h2 className="font-bold md:text-[48px] text-[24px] md:mt-16 uppercase text-[#45651C]">
          Заявка
        </h2>
        <hr className="bg-[#45651C] h-[2px] font-bold" />
        <div
          className="w-full  bg-cover bg-center mt-7 rounded-[30px]"
          style={{ backgroundImage: `url(${applicationBg}) ` }}
        >
          <div className="flex lg:flex-row flex-col justify-between lg:items-end items-center gap-5 sm:p-14 p-7">
            <div className="flex flex-col lg:items-start items-center gap-4 lg:w-1/2 w-full">
              <h6 className="font-semibold sm:text-4xl text-[20px] text-white sm: mb-4">
                Для получения консультации оставьте заявку, и мы свяжемся с
                вами.
              </h6>
              <input
                type="text"
                className="rounded-full sm:w-4/6 w-full py-2 pl-6 outline-none border-[1.3px] border-[#949494]"
                placeholder="Ваше имя"
              />
              <input
                type="text"
                className="rounded-full sm:w-4/6 w-full py-2 pl-6 outline-none border-[1.3px] border-[#949494]"
                placeholder="Адрес электронной почты"
              />
              <input
                type="text"
                className="rounded-full sm:w-4/6 w-full py-2  pl-6 outline-none border-[1.3px] border-[#949494]"
                placeholder="Номер телефона"
              />
              <input
                type="text"
                className="rounded-full sm:w-4/6 w-full py-2  pl-6 outline-none border-[1.3px] border-[#949494]"
                placeholder="Ваше сообщение"
              />
              <div className="sm:w-4/6 w-full">
                <Button
                  padding="10px"
                  borderColor="2px solid #B4EBC7"
                  onClick={sentSuccessfullyHandler}
                >
                  Отправить заявку
                </Button>
              </div>
            </div>
            <div className="p-7 bg-white bg-opacity-50 backdrop-blur-md rounded-3xl text-start lg:w-1/2 sm:w-2/3 w-full">
              <div className="flex flex-col gap-4">
                <h6 className="text-[#45651C] sm:text-24 text-18 font-semibold">
                  Так же вы можете связаться с нами по телефону
                </h6>
                <div className="flex justify-center items-center gap-2 bg-white py-2 rounded-full border-2 border-solid border-[#BEEAE0]">
                  <img src={phone} alt="phone icon" className="h-6" />
                  <span>(+996) 000 00 00 00</span>
                </div>
                <div className="flex justify-center items-center gap-2 bg-white py-2 rounded-full border-2 border-solid border-[#BEEAE0]">
                  <img src={phone} alt="phone icon" className="h-6" />
                  <span>(+996) 000 00 00 00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
