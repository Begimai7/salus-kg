import { languages_list } from "../utils/constants/contants";

export const Languages = ({ onClickHandler }) => {
  return (
    <div className="absolute bg-white w-[194px] rounded-3xl flex flex-col justify-between">
      {languages_list.map((el) => (
        <div
          key={el.id}
          className="hover:bg-[#DBEEDE] w-full px-[14px] py-2 rounded-3xl"
          onClick={onClickHandler}
        >
          {el.title}
        </div>
      ))}
    </div>
  );
};
