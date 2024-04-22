import { Button } from "../UI/Button";
import { Container } from "../UI/Container";

export const ContactUs = () => {
  return (
    <Container>
      <div className="my-20 md:flex flex md:flex-row flex-col md:items-end w-full md: gap-6">
        <h2 className="lg:text-[48px] text-[24px] font-bold text-white md: text-center md:w-[60%] ">
          Чтобы получить консультацию, свяжитесь с нами
        </h2>
        <div className="md:w-[30%]">
          <Button backColor="#fff" textColor="#000" padding="34px">
            Связаться
          </Button>
        </div>
      </div>
    </Container>
  );
};
