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
      </div>
    </>
  );
};

export default Footer;
