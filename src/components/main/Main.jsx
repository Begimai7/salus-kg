import { Container } from "../UI/Container";

export const Main = () => {
  return (
    <Container>
      <div className="flex flex-col sm:mt-32 mt-24 mb-[74px]  w-full  font-Archivo">
        <div className="sm:w-[630px] text-white mb-6 sm: mt-9">
          <p className="font-normal md:text-[48px] text-[24px]">
            Система управления отелями и апартаментами{" "}
          </p>
          <h1 className="font-bold md:text-[128px] text-[64px] uppercase ">
            salus
            <span className="font-serif font-medium lowercase">.kg</span>
          </h1>
        </div>
        <div className="lg:flex flex lg:flex-row flex-col gap-6 mr-16 text-[#45651C]">
          <div className="md:w-[480px]">
            <h6 className="font-semibold md:text-[36px] text-[28px] mb-2">
              Большая база данных
            </h6>
            <p className="text-[18px]">
              Большая база данных о строящихся и продаваемых объектах недвижимых
              имуществ в нашем офисе
            </p>
          </div>
          <div className="md:w-[554px]">
            <h6 className="font-semibold sm:text-[36px] text-[28px] mb-2">
              Прямые цены от застройщиков
            </h6>
            <p className="text-[18px]">
              Большая база данных о строящихся и продаваемых объектах недвижимых
              имуществ в нашем офисе
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
