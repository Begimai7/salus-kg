import { useState } from "react";
import { Button } from "../UI/Button";
import { Container } from "../UI/Container";
import { Application } from "../organizers/Application";

export const ContactUs = () => {
  const [openContactModal, setOpenContactModal] = useState(false);

  const openContactModalHandler = () => {
    setOpenContactModal(!openContactModal);
  };
  return (
    <div>
      {openContactModal && (
        <div className={`fixed top-[100px] left-36 w-[80%] h-[60%] z-50`}>
          {" "}
          <Application closeModal={openContactModalHandler} />{" "}
        </div>
      )}
      <Container>
        <div className="sm:my-20 my-8 md:flex flex md:flex-row flex-col md:items-end md: gap-6 w-full ">
          <h2 className="lg:text-[48px] text-[24px] font-bold text-white md: text-start md:w-[60%] ">
            Чтобы получить консультацию, свяжитесь с нами
          </h2>
          <div className="md:w-[30%]  ">
            <Button
              backColor="#fff"
              borderColor="2px solid #BEEAE0"
              textColor="#000"
              padding="34px"
              onClick={openContactModalHandler}
            >
              Связаться
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
