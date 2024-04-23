const getVariant = (variant) => {
  switch (variant) {
    case "primary":
      return "bg-[#9747FF] hover:bg-black text-black hover:text-white shadow shadow-black-600/25 hover:shadow-black-600/75";
    case "secondary":
      return "bg-[#9747FF] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75";

    case "outline-primary":
      return "bg-transparent text-white border border-white hover:text-white hover:bg-[#181818]";

    default:
      return "bg-[#9747FF] hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
  }
};
export const Button = ({
  className,
  children,
  variant,
  square,
  paddingLess,
  type = "button",
  onClick,
  imgSrc,
  imgAlt,
  iconPresent,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={`
          ${getVariant(variant)}  transition duration-75 font-poppins  ${
        !paddingLess && "xl:px-[20px] lg:px-[14px] lg:py-2 px-4  py-2 "
      }  ${
        !square && "rounded-[8px] sm:rounded-[10px] "
      } active:scale-95 ${className}  ${
        !iconPresent && "flex justify-center items-center"
      } gap-[10px]   text-sm `}
    >
      {imgSrc && (
        <div className="relative sm:w-[20px] w-[10px] sm:h-[20px] h-[10px]">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      )}
      {children}
    </button>
  );
};
