import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "../../../../redux/generec-slices/modals";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuhtModal = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector(({ modal }) => modal);
  const [active, setActive] = useState("login");

  return (
    <Modal
      footer={false}
      onCancel={() => dispatch(setAuthModal())}
      open={authModal}
    >
      <div class="flex gap-2.5 items-center justify-center mt-6">
        <h3
          onClick={() => setActive("login")}
          className={`cursor-pointer text-xl transition-all true ${
            active === "login" && "text-[#46A358]"
          }`}
        >
          Login
        </h3>
        <div class="border h-4 bg-[#3D3D3D]" />
        <h3
          onClick={() => setActive("register")}
          className={`cursor-pointer text-xl transition-all true ${
            active === "register" && "text-[#46A358]"
          }`}
        >
          Register
        </h3>
      </div>
      {active === "login" ? <Login /> : <Register />}
    </Modal>
  );
};

export default AuhtModal;
/*
onClick={setActive("register")}
        
*/
