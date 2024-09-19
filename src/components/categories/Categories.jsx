import { useGetCategoriesQuery } from "@/redux/api/sclices/productSlice";
import React from "react";

const Categories = () => {
  const { data } = useGetCategoriesQuery();

  return (
    <div className="categories flex justify-between items-center mt-5">
      <h2 className="text-xl text-slate-200">Lates and Greatest cars</h2>
      <select className="bg-transparent border-none outline-none text-sky-100">
        {data?.payload.map((item, idx) => (
          <option key={item._id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
