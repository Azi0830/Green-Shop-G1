import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Media = () => {
  return (
    <div className="bg-[#FBFBFB] p-[25px] flex gap-16">
      <div className="flex gap-4 flex-col w-[20%]">
        <h1 className="font-bold">My Account</h1>
        <p>My Account</p>
        <p>Our stores</p>
        <p>Contact us</p>
        <p>Careel</p>
        <p>Specials</p>
      </div>
      <div className="flex gap-4 flex-col w-[20%]">
        <h1 className="font-bold">Help & Guide</h1>
        <p>Help Center</p>
        <p>How to Buy</p>
        <p>Shipping & Delivery</p>
        <p>Product Policy</p>
        <p>How to Return</p>
      </div>
      <div className="flex gap-4 flex-col w-[20%]">
        <h1 className="font-bold">Categories</h1>
        <p>House Plants</p>
        <p>Potter Plants</p>
        <p>Seeds</p>
        <p>Small Plants</p>
        <p>Accessories</p>
      </div>
      <div className="w-[40%]">
        <strong>Social Media</strong>
        <div className="flex gap-4 mt-[20px] mb-[33px]">
          <div className="border-2 border-[#46A35833] w-[30px] h-[30px] rounded-md flex justify-center items-center cursor-pointer">
            <FacebookOutlined className="text-[#46A35833] border-none" />
          </div>
          <div className="border-2 border-[#46A35833] w-[30px] h-[30px] rounded-md flex justify-center items-center cursor-pointer">
            <InstagramOutlined className="text-[#46A35833] border-none" />
          </div>{" "}
          <div className="border-2 border-[#46A35833] w-[30px] h-[30px] rounded-md flex justify-center items-center cursor-pointer">
            <XOutlined className="text-[#46A35833] border-none" />
          </div>{" "}
          <div className="border-2 border-[#46A35833] w-[30px] h-[30px] rounded-md flex justify-center items-center cursor-pointer">
            <LinkedinOutlined className="text-[#46A35833] border-none" />
          </div>{" "}
          <div className="border-2 border-[#46A35833] w-[30px] h-[30px] rounded-md flex justify-center items-center cursor-pointer">
            <YoutubeOutlined className="text-[#46A35833] border-none" />
          </div>
        </div>
        <strong>We accept</strong>
        <img
          className="mt-6 cursor-pointer"
          src="https://s3-alpha-sig.figma.com/img/1e46/0c89/ee17b2b09a69f96d2552ed3b0b04ac05?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EhW~q1-pigguGusknaMptXEBo4SBiI2CL66jXQDZ71eNq5PkkltJTWHwmxrQpM~rYSMiakpOMRDc4POVjTOodq3t-FjgI2GH3FCU6M1qzq~HeqFsPSxYcsdX5c4eezTek9gh7wpBZiaEF8Zm7cNIUr8729Y3j4t~GV5ZbIcG-Y1GOCS-bSVg7u1d9bbbJ7ZG1hW0mpQrotAU1xVfBge2i32qqTqnIABhxxZW6og2hPr~kPDWx~mgDGXI0Eqb4Ip2kX4ca5ZQCc8jHmo14h8nh7Vh92WNDn2joucX~6tYOs0MhPNuTCr91MZv8WVsuhbOSL9yrYYVXg54EjEM73mpRA__"
          alt="Social Media logo"
        />
      </div>
    </div>
  );
};

export default Media;
