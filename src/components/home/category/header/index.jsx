import React from "react";
import { Button } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setCategoryModal } from "../../../../redux/generec-slices/modals";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import SortSelect from "./select";

const Header = () => {
  const dispatch = useDispatch();
  const { setParams, getParams } = useSearchParams();

  const activeHeader = "font-bold text-[#46A358] border-b-2 border-[#46A358]";

  const type = getParams("type") ?? "all-plants";

  return (
    <div className="flex justify-between items-center h-[23px]">
      <div className="flex gap-8">
        <h2
          onClick={() => setParams({ type: "all-plants" })}
          className={`cursor-pointer ${type === "all-plants" && activeHeader}`}
        >
          All Plants
        </h2>
        <h2
          onClick={() => setParams({ type: "new-arrivals" })}
          className={`cursor-pointer ${
            type === "new-arrivals" && activeHeader
          }`}
        >
          New Arrivals
        </h2>
        <h2
          onClick={() => setParams({ type: "sale" })}
          className={`cursor-pointer ${type === "sale" && activeHeader}`}
        >
          Sale
        </h2>
      </div>
      <div className=" max-md:hidden">
        <SortSelect />
      </div>
      <Button
        onClick={() => dispatch(setCategoryModal())}
        className="hidden max-md:flex justify-center items-center"
      >
        <BarsOutlined />
      </Button>
    </div>
  );
};

export default Header;
/*
selected da sortni [0] indexni bermasa tug'ri ishlayabdi qaysi yaxshiroq?
*/
