import { useGetCategoriesQuery } from "@/redux/api/sclices/productSlice";
import { changeCategory } from "@/redux/slices/category-slice";
import React from "react";
import { useDispatch } from "react-redux";

const Categories = () => {
  const { data } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  return (
    <div className="categories flex justify-between items-center mt-5">
      <h2 className="text-xl text-slate-200">Lates and Greatest cars</h2>
      <select
        className="bg-transparent border-none outline-none text-sky-100"
        onChange={(e) => {
          dispatch(changeCategory(e.target.value));
        }}
      >
        <option value={""}>All</option>
        {data?.payload.map((item, idx) => (
          <option value={item._id} key={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
