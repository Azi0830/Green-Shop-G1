import {
  LoginOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthModal } from "../../redux/generec-slices/modals";
import AuhtModal from "./modal/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <AuhtModal />
      <div className="w-[80%] h-[80px] m-auto flex justify-between items-center border-b border-b-[#46A35880]">
        <div>
          <img
            className="cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="greenshop img logo"
          />
        </div>
        <div className="flex gap-[50px]">
          <h3
            onClick={() => navigate("/")}
            className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer"
          >
            Home
          </h3>
          <h3 className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer">
            Shop
          </h3>
          <h3 className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer">
            Plane Care
          </h3>
          <h3 className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer">
            Blogs
          </h3>
        </div>
        <div className="flex gap-[30px]">
          <SearchOutlined className="text-2xl cursor-pointer" />
          <ShoppingCartOutlined className="text-2xl cursor-pointer" />
          <button
            onClick={() => dispatch(setAuthModal())}
            type="button"
            className="bg-[#46A358] w-[100px] h-[35px] text-[#fff] flex gap-2 justify-center items-center rounded-md"
          >
            <LoginOutlined />
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
