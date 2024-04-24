import { Button } from "../UI/Button";
import { Container } from "../UI/Container";

export const ContactUs = () => {
  return (
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
          >
            Связаться
          </Button>
        </div>
      </div>
    </Container>
  );
};
