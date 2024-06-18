import { Slider } from "antd";
import { useState } from "react";
import { useSearchParams } from "../../../../../hooks/useSearchParams";

const PricRange = () => {
  const { getParams, setParams } = useSearchParams();

  const min = Number(getParams("min") ?? 0);
  const max = Number(getParams("max") ?? 1500);

  const [range, setRange] = useState([min, max]);
  return (
    <div className="py-[14px] px-[18px] ">
      <h2 className="font-bold">Price Range</h2>
      <div className="flex flex-col gap-3 my-[7px] px-[12px]">
        <Slider min={0} max={1500} value={range} range onChange={setRange} />
        <h3>
          Price:{" "}
          <span className="text-[#46A358] font-bold">
            {" "}
            {`$${range[0]}--$${range[1]}`}
          </span>
        </h3>
        <button
          type="button"
          className="bg-[#46A358] w-[140px] h-[40px] text-[#fff] flex justify-center items-center rounded-md mt-[16px]"
          onClick={() => {
            setParams({
              min: range[0],
              max: range[1],
            });
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default PricRange;
