import { useSearchParams } from "react-router-dom";

const Category = () => {
  const [get] = useSearchParams();

  return (
    <div className="w-full bg-[#f5f5f5]">
      <h1>category</h1>
      <h1>{get.get("category") ?? "house-plants"}</h1>
    </div>
  );
};

export default Category;
