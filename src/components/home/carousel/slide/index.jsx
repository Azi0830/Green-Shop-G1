const Slide = ({
  title,
  subTitle,
  discription,
  button_name,
  bigImage,
  smallImage,
}) => {
  return (
    <div className="flex">
      <div className="w-[60%] h-full ml-[43px]">
        <h5 className="mt-[68px] mb-[7px] ">{subTitle}</h5>
        <h1 className="text-[70px] font-black leading-[70px] mb-[5px]">
          {title}
          <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="text-[14px] w-[80%]">{discription}</p>
        <button
          type="button"
          className="bg-[#46A358] w-[140px] h-[40px] text-[#fff] flex justify-center items-center rounded-md mt-[44px]"
        >
          {button_name}
        </button>
      </div>
      <div className="w-[40%] h-full relative flex items-center justify-center">
        <img src={bigImage} alt="flowers img " />
        <img
          className="absolute left-4 bottom-0"
          src={smallImage}
          alt="flowers img "
        />
      </div>
    </div>
  );
};

export default Slide;
