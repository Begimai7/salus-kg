import { Button } from "../UI/Button";
import { Container } from "../UI/Container";
import { nav_list } from "../utils/constants/contants";
import closeArrow from "../../../public/assets/icons/mobile/close-arrow.svg";
import { useState } from "react";
import burger from "../../../public/assets/icons/mobile/open-burger.svg";
import closeBurger from "../../../public/assets/icons/mobile/burger.svg";
import phone from "../../../public/assets/icons/organizers/phone.svg";
import { Languages } from "../UI/Languages";

export const Nav = () => {
  const [openMenuBurger, setOpenMenuBurger] = useState(false);
  const [openLanguages, setOpenLanguages] = useState(false);

  const openMenuBurgerHandler = () => {
    setOpenMenuBurger(!openMenuBurger);
  };

  const openLanguageSelectHandler = () => {
    setOpenLanguages(true);
  };
  const selectLanguageSelectHandler = () => {
    setOpenLanguages(false);
  };

  return (
    <div className="w-full bg-[##DBEEDE]">
      <Container>
        <nav>
          <div className="fixed  flex flex-col z-50 lg:w-[1280px] sm:w-[640px] md:w-[768px] s: full ">
            <div className=" lg:flex hidden gap-3 justify-end pr-[82px] bg-black w-full   text-white  backdrop-blur-lg fixed top-0 left-0 py-[12px]">
              <div className="flex justify-center gap-2">
                <img src={phone} alt="" />{" "}
                <span className="text-[#337FFF]">(+996) 000 00 00 00</span>
              </div>
              <div className="flex justify-center gap-2">
                <img src={phone} alt="" />{" "}
                <span className="text-[#337FFF]">(+996) 000 00 00 00</span>
              </div>
            </div>
            <div className="lg:flex flex-col hidden justify-between items-center gap-6 bg-[#DDE1E6] opacity-85 backdrop-blur-lg fixed top-12 left-0 right-0 z-50">
              <div className="flex justify-between items-center gap-6 w-full px-20">
                <div className="lg:flex hidden text-[#45651C] font-bold sm:text-[40px] text-[24px] ">
                  <p className="font-Archivo">Salus</p>
                  <span className="font-serif font-light">.kg</span>
                </div>
                <div className="lg:flex hidden gap-6 lg:items-center">
                  <ul
                    className="lg:flex items-center gap-4 mt-[11px]"
                    onClick={selectLanguageSelectHandler}
                  >
                    {nav_list.map((el) => (
                      <li
                        className="text-[#2D2D2D] hover:text-[#45651C] font-medium hover:font-bold lg:text-[18px] text-[14px]"
                        key={el.id}
                      >
                        {el.name}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <div
                      className="lg:flex"
                      onMouseMove={openLanguageSelectHandler}
                    >
                      РУ <img src={closeArrow} alt="" />
                    </div>
                    {openLanguages && (
                      <Languages onClickHandler={selectLanguageSelectHandler} />
                    )}
                  </div>
                  <div className="lg:flex ml-3">
                    <Button padding="64px">Связаться</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden block justify-between items-center w-full fixed top-0 left-0 z-50">
            <div className="flex justify-between bg-[#DDE1E6] opacity-85 backdrop-blur-lg items-center md:px-16 s:px-10 px-4 py-3">
              <div className=" text-[#45651C] font-bold text-[24px]">
                Salus<span className="font-serif font-medium">.kg</span>
              </div>
              <div className="text-end" onClick={openMenuBurgerHandler}>
                <img src={openMenuBurger ? closeBurger : burger} alt="" />
              </div>
            </div>
          </div>

          {openMenuBurger && (
            <div
              className="lg:hidden flex flex-col justify-between fixed pt-28 inset-0 z-40 md:px-16 s:px-10 px-3 py-4"
              style={{
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <div>
                <ul className="flex flex-col items-start mt-40 gap-6">
                  {nav_list.map((el) => (
                    <li
                      className="text-[#2D2D2D] hover:text-[#45651C] font-medium hover:font-bold"
                      key={el.id}
                    >
                      {el.name}
                    </li>
                  ))}
                </ul>
                <div>
                  <div
                    className="flex mt-8 ml-8"
                    onClick={openLanguageSelectHandler}
                  >
                    РУ <img src={closeArrow} alt="" className="ml-2" />
                  </div>
                  {openLanguages && (
                    <Languages
                      selectLanguageHandler={openLanguageSelectHandler}
                    />
                  )}
                </div>
              </div>
              <div className="mt-4 w-full">
                <Button padding="64px">Связаться</Button>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
};
