const SliderOne = () => {
  return (
    <div className="flex">
      <div className="w-[60%] h-full ml-[43px]">
        <h5 className="mt-[68px] mb-[7px] ">WELCOME TO GREEPSHOP</h5>
        <h1 className="text-[70px] font-black leading-[70px] mb-[5px]">
          LET{"'"}S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="text-[14px] w-[80%]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button
          type="button"
          className="bg-[#46A358] w-[140px] h-[40px] text-[#fff] flex justify-center items-center rounded-md mt-[44px]"
        >
          SHOP NOW
        </button>
      </div>
      <div className="w-[40%] h-full relative flex items-center justify-center">
        <img src="" alt="flowers img " />
        <img className="absolute left-4 bottom-0" src="" alt="flowers img " />
      </div>
    </div>
  );
};

export default SliderOne;
