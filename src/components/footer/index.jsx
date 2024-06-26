import {
  EnvironmentOutlined,
  DownOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";

const Footer = () => {
  return (
    <div className="w-[80%] h-[250px] m-auto mt-[100px] ">
      <div className="bg-[#FBFBFB] p-[25px] flex justify-between">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
            alt="footer logo"
          />
          <h1>Garden Care</h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="border-x-2 border-bg-[#46A3581A]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a"
            alt="footer logo"
          />
          <h1>Plant Renovation</h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
            alt="footer logo"
          />
          <h1>Watering Graden</h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div>
          <h1>Would you like to join newsletters?</h1>
          <div className="flex border-r-none">
            <Input placeholder="enter your email address..." />
            <Button className="bg-[#46A358] w-[85px]  h-[40px] text-[#fff] flex gap-2 justify-center items-center rounded-md">
              JOIN
            </Button>
          </div>

          <p>
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="bg-[#46A3581A] h-[88px] pl-[25px] pr-[200px]  flex items-center justify-between max-md:flex-col max-md:gap-4 max-md:h-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="footer logo"
        />
        <div className="flex gap-2 w-[250px]">
          <EnvironmentOutlined className="text-[#46A358]" />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className="flex gap-2">
          <DownOutlined className="text-[#46A358]" />
          <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
        </div>
        <div className="flex gap-2">
          {" "}
          <PhoneOutlined className="text-[#46A358]" />
          <a href="tel:+88 01911 717 490">+88 01911 717 490</a>
        </div>
      </div>
      <div className="bg-red-200 p-[25px]">footer</div>
    </div>
  );
};

export default Footer;
