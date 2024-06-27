import Contact from "./contact";
import Join from "./join";
import Media from "./social-media";

const Footer = () => {
  return (
    <>
      <div className="w-[80%] h-[250px] m-auto mt-[100px] ">
        <Join />
        <Contact />
        <Media />
        <div className="text-center cursor-pointer">
          <h3>© 2021 GreenShop. All Rights Reserved.</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
