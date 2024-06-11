import React from "react";
import Categories from "./categories";
import PricRange from "./price-range";
import Size from "./size";
import Discaunt from "./discaunt";

const SideNav = () => {
  return (
    <div className="w-[20%] bg-[#f5f5f5] mt-[46px] ml-[80px]">
      <Categories />
      <PricRange />
      <Size />
      <Discaunt />
    </div>
  );
};

export default SideNav;
