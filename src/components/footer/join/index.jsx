import { Button, Input } from "antd";

const Join = () => {
  return (
    <div className="bg-[#FBFBFB] pr-[25px] py-[25px] flex justify-between max-md:flex-col max-md:gap-6">
      <div className="pl-[25px] max-md:w-[300px] relative">
        <div className="bg-[#46A35821] w-[74px] h-[74px] rounded-full absolute top-4 left-4" />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
          alt="footer logo"
        />
        <h1 className="font-bold my-4">Garden Care</h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="border-x-2 border-bg-[#46A3581A] max-md:border-none pl-[25px] max-md:w-[300px] relative">
        <div className="bg-[#46A35821] w-[74px] h-[74px] rounded-full absolute top-4 left-4" />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a"
          alt="footer logo"
        />
        <h1 className="font-bold my-4">Plant Renovation</h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="pl-[25px] max-md:w-[300px] relative">
        <div className="bg-[#46A35821] w-[74px] h-[74px] rounded-full absolute top-4 left-4" />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
          alt="footer logo"
        />
        <h1 className="font-bold my-4">Watering Graden</h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="max-md:w-[300px]">
        <h1 className="font-bold text-lg">
          Would you like to join newsletters?
        </h1>
        <div className="flex items-center border-r-none my-6">
          <Input
            className="rounded-none rounded-s-lg h-[40px]"
            placeholder="enter your email address..."
          />
          <button className="bg-[#46A358] w-[85px]  h-[40px] text-[#fff] flex gap-2 justify-center items-center rounded-none rounded-e-lg">
            JOIN
          </button>
        </div>

        <p>
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  );
};

export default Join;
