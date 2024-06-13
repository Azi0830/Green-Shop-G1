const Size = () => {
  return (
    <div className="py-[14px] px-[18px] ">
      <h2 className="font-bold">Size</h2>
      <div className="flex flex-col gap-3 my-[7px] px-[12px]">
        <div className="flex justify-between hover:text-[#46A358] hover:font-bold">
          <h3>Small</h3>
          <h3>(22)</h3>
        </div>
        <div className="flex justify-between hover:text-[#46A358] hover:font-bold">
          <h3>Medium</h3>
          <h3>(22)</h3>
        </div>
        <div className="flex justify-between hover:text-[#46A358] hover:font-bold">
          <h3>Large</h3>
          <h3>(22)</h3>
        </div>{" "}
      </div>
    </div>
  );
};

export default Size;
