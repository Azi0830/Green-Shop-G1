import SideNav from "./sidenav";
import Slider from "./carousel";
import Category from "./category";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="w-[80%] m-auto flex gap-12 mt-[46px]">
        <SideNav />
        <Category />
      </div>
    </>
  );
};

export default Home;
