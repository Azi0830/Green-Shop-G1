import { Carousel } from "antd";
import SliderOne from "./slide";

const Slider = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto bg-[#F5F5F580] mt-[12px] ">
      <Carousel className="w-full h-[450px]">
        <SliderOne />
        <SliderOne />
        <SliderOne />
      </Carousel>
    </div>
  );
};

export default Slider;
