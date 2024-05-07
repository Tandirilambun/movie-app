const CategoriesButton = ({
  isActive = "",
  children,
  onclick = () => {},
  name,
}) => {
  return (
    <div
      id={name}
      className={`${isActive}  py-2 w-40 cursor-pointer group bg-[#333333]/60 rounded-full ease-in-out duration-300`}
      onClick={onclick}
    >
      <h2 className="text-center text-xs font-bold font-montserrat text-white">
        {children}
      </h2>
    </div>
  );
};

export default CategoriesButton;
