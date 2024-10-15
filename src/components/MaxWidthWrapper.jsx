const MaxWidthWrapper = ({ children }) => {
  return (
    <div className="mx-auto h-full max-w-screen-2xl px-2.5 md:px-20">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
