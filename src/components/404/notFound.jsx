import React from "react";

import notFountImg from "@/assets/404.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 bg-slate-500 min-h-screen">
      <Link
        to={"/"}
        className="underline underline-offset-4 text-xl text-slate-100"
      >
        Home
      </Link>
      <img className="max-w-2xl rounded-xl" src={notFountImg} alt="" />
    </div>
  );
};

export default NotFound;
