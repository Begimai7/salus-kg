export const Button = ({
  children,
  padding,
  backColor,
  textColor,
  borderColor,
  onClick,
  ...rest
}) => {
  return (
    <div
      {...rest}
      onClick={onClick}
      style={{
        padding: `10px ${padding}`,
        background: backColor,
        color: textColor || "white",
        border: borderColor,
        opacity: "1",
        backdropFilter: "blur(10px)",
      }}
      className={`bg-gradient-to-r from-[#36CBB9] to-[#A7D545] opacity-90 backdrop-blur-lg text-[18px]  font-semibold rounded-full text-center flex items-center justify-center gap-3`}
    >
      {children}
    </div>
  );
};
