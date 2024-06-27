import {
  EnvironmentOutlined,
  DownOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
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
  );
};

export default Contact;
