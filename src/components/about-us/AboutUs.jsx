import { Container } from "../UI/Container";
import aboutImg from "../../../public/assets/img/about-uss.png";
import { OursServices } from "./OursServices";
import { Benefits } from "./Benefits";

export const AboutUs = () => {
  return (
    <div className="bg-white rounded-[100px] sm:py-16 py-16 px-4">
      <Container>
        <div className="flex flex-col sm:gap-28 gap-16">
          <div>
            <h2 className="font-bold sm:text-[48px] text-[24px] uppercase text-[#45651C]">
              О нас
            </h2>
            <hr className="bg-[#45651C] h-[2px] font-bold" />
            <div className="mt-8 flex relative  justify-end ">
              <div
                className="flex flex-col gap-1 
              absolute top-[20%] md:left-4 lg:w-[738px] md:w-2/3 w-full lg:text-[18px] text-[16px]
                bg-opacity-60 backdrop-filter bg-[#fff] backdrop-blur-sm px-8 py-6 rounded-[40px] "
              >
                <p className="text-[#2D2D2D] leading-7">
                  Наша компания предоставляет современную и удобную систему
                  управления апартаментами для жильцов и собственников
                  недвижимости. Мы стремимся обеспечить максимальный комфорт и
                  безопасность нашим клиентам, предоставляя им возможность
                  управлять своими апартаментами из любой точки мира.
                </p>
                <p>
                  Наша система позволяет легко контролировать температуру,
                  освещение, безопасность и другие параметры в апартаментах
                  через мобильное приложение или веб-портал. Мы также предлагаем
                  возможность заказа дополнительных услуг, таких как уборка,
                  обслуживание и транспортные услуги, прямо через нашу
                  платформу.
                </p>
              </div>
              <div className="lg:w-[1120px] h-[599px] object-fit">
                <img className="w-full  object-cover " src={aboutImg} alt="" />
              </div>
            </div>
          </div>
          <OursServices />
          <Benefits />
        </div>
      </Container>
    </div>
  );
};
