import React from "react";
import { Select } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const Header = () => {
  const { setParams, getParams } = useSearchParams();

  const activeHeader = "font-bold text-[#46A358] border-b-2 border-[#46A358]";

  const type = getParams("type");
  const sort = getParams("sort");

  const options = [
    {
      value: "default-sorting",
      label: "Default Sorting",
    },
    {
      value: "the-cheapest",
      label: "The Cheapest",
    },
    {
      value: "most-expensive",
      label: "Most Expensive",
    },
  ];
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
      <div className="flex gap-2 items-center">
        <h3>Sort by:</h3>
        <Select
          labelInValue
          defaultValue={options?.filter((item) => item.value === sort)}
          onChange={(value) => setParams({ sort: value.value })}
          style={{
            width: 150,
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default Header;
