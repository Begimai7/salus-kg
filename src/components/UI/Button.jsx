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
        color: textColor,
        border: borderColor,
      }}
      className={`bg-gradient-to-r from-[#36CBB9] to-[#A7D545] text-[18px] text-white font-semibold rounded-full text-center flex items-center justify-center gap-3`}
    >
      {children}
    </div>
  );
};
