import { useSearchParams } from "../../../../../hooks/useSearchParams";

const Size = () => {
  const { getParams, setParams } = useSearchParams();

  const normal_text = "flex justify-between hover:text-[#46A358]";
  const active_text = "flex justify-between text-[#46A358] font-bold";

  const selectedSize = getParams("size" ?? "small");

  return (
    <div className="py-[14px] px-[18px] ">
      <h2 className="font-bold">Size</h2>
      <div className="flex flex-col gap-3 my-[7px] px-[12px]">
        <div
          onClick={() => setParams({ size: "small" })}
          className={selectedSize === "small" ? active_text : normal_text}
        >
          <h3>Small</h3>
          <h3>(22)</h3>
        </div>
        <div
          onClick={() => setParams({ size: "medium" })}
          className={selectedSize === "medium" ? active_text : normal_text}
        >
          <h3>Medium</h3>
          <h3>(22)</h3>
        </div>
        <div
          onClick={() => setParams({ size: "large" })}
          className={selectedSize === "large" ? active_text : normal_text}
        >
          <h3>Large</h3>
          <h3>(22)</h3>
        </div>{" "}
        <div
          onClick={() => setParams({ size: "large" })}
          className={selectedSize === "large" ? active_text : normal_text}
        >
          <h3>Large</h3>
          <h3>(22)</h3>
        </div>{" "}
      </div>
    </div>
  );
};

export default Size;
