import React from "react";
import { Select } from "antd";
import { useSearchParams } from "../../../../../hooks/useSearchParams";

const SortSelect = () => {
  const { setParams, getParams } = useSearchParams();
  const sort = getParams("sort") ?? "default-sorting";

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
    <div className="flex gap-2 items-center">
      <h3>Sort by:</h3>
      <Select
        // labelInValue
        defaultValue={options?.filter((item) => item.value === sort)}
        onChange={(value) => setParams({ sort: value })}
        style={{
          width: 150,
        }}
        options={options}
      />
    </div>
  );
};

export default SortSelect;
