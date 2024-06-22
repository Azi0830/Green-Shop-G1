import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { useAxios } from "../../../../hooks/useAxios";
import Card from "./card";

const Body = () => {
  const axios = useAxios();
  const { getParams } = useSearchParams();

  const category = getParams("category") ?? "house-plants";
  const min = getParams("min") ?? 0;
  const max = getParams("mix") ?? 1500;

  const cache_key = `category=${category}&min=${min}&max=${max}`;

  const { data } = useQuery({
    queryKey: [cache_key],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}`,
        params: {
          range_min: min,
          range_max: max,
        },
      });
      return data.data;
    },
  });

  console.log(data);
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {data?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Body;
