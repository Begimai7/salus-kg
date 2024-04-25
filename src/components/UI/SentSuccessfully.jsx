import success from "../../../public/assets/icons/mini-icons/success.svg";
import { Button } from "./Button";
import cancel from "../../../public/assets/icons/mini-icons/cencel.svg";

export const SentSuccessfully = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white p-8 rounded-3xl relative z-10">
        <img
          src={cancel}
          alt="Cancel"
          className=" top-4 right-4 cursor-pointer"
          onClick={closeModal}
        />

        <div className="text-center">
          <img src={success} alt="Success" className="mx-auto" />
          <div className=" flex flex-col gap-4  mt-4">
            <p className="text-[24px] font-semibold w-[373px]">
              Ваша заявка успешно отправлена, ожидайте ответа!
            </p>
            <Button padding="10px" onClick={closeModal}>
              Готово
            </Button>
          </div>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
    </div>
  );
};
