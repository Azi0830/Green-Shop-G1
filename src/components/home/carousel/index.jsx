import { Carousel } from "antd";
import Slide from "./slide";
import { carousel_mock } from "../../../utils/mock";

const Slider = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto bg-[#F5F5F580] mt-[12px] ">
      <Carousel className="w-full h-[450px]">
        {carousel_mock.map((value) => (
          <Slide key={value._id} {...value} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
