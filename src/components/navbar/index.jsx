import {
  LoginOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  setAuthModal,
  setNavbarModal,
} from "../../redux/generec-slices/modals";
import AuhtModal from "./modal/auth";
import Pages from "./pages";
import { Button } from "antd";
import NavbarPages from "./modal/pages-modal";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <AuhtModal />
      <NavbarPages />
      <div className="w-[80%] h-[80px] m-auto flex justify-between items-center border-b border-b-[#46A35880]">
        <div>
          <img
            className="cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="greenshop img logo"
          />
        </div>
        <div className="max-md:hidden">
          <Pages />
        </div>
        <div className="flex gap-[30px]">
          <SearchOutlined className="text-2xl cursor-pointer" />
          <ShoppingCartOutlined className="text-2xl cursor-pointer" />
          <button
            onClick={() => dispatch(setAuthModal())}
            type="button"
            className="bg-[#46A358] w-[100px] h-[35px] text-[#fff] flex gap-2 justify-center items-center rounded-md max-md:hidden"
          >
            <LoginOutlined />
            Login
          </button>
          <Button
            onClick={() => dispatch(setNavbarModal())}
            className="hidden max-md:flex justify-center items-center"
          >
            <MenuOutlined />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
