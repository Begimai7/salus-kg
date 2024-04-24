export const Container = ({ children }) => {
  return (
    <div className="lg:w-[1280px] sm:w-[640px] md:w-[768px] s: full mx-auto">
      {children}
    </div>
  );
};
