const languages_list = [
  {
    id: 1,
    title: "Русский (РУ)",
  },
  {
    id: 2,
    title: "Кыргызча (КГ)",
  },
  {
    id: 3,
    title: "English (EN)",
  },
  {
    id: 4,
    title: "اَلْعَرَبِيَّةُ (AR)",
  },
  {
    id: 5,
    title: "Türkçe (TR)",
  },
  {
    id: 6,
    title: "中文",
  },
];

export const Languages = ({ selectLanguageHandler }) => {
  return (
    <div className="absolute bg-white w-[194px] rounded-3xl flex flex-col justify-between">
      {languages_list.map((el) => (
        <div
          key={el.id}
          className="hover:bg-[#DBEEDE] w-full p-3"
          onClick={selectLanguageHandler}
        >
          {el.title}
        </div>
      ))}
    </div>
  );
};
