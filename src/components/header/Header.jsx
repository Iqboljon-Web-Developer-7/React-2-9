import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";

import logo from "@/assets/logo.svg";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, []);

  const isLogged = useSelector((state) => state.isLogged.value);

  return (
    <header
      className={`header-wrapper sticky top-0 mx-auto py-4 px-1 xs:px-2 ${
        isFixed ? "animate-fade-in-top-1 bg-[#0A3E51bb]" : "z-20 bg-[#0A3F51]"
      } backdrop-blur-sm z-20`}
    >
      <div className="wrapper flex justify-between items-center">
        <h2 className="text-2xl animate-fade-in-top-1">
          <Link to={"/"}>
            <img src={logo} />
          </Link>
        </h2>
        <div className="links flex items-center justify-center gap-4 text-2xl">
          <Link
            to={"/cart"}
            className="text-green-300 animate-fade-in-top-2 relative"
          >
            <FaOpencart />{" "}
            {cart.length > 0 && (
              <span className="absolute inset-[-.3rem_-.3rem_auto_auto] h-4 w-4 text-[.8rem] rounded-full flex items-center justify-center text-slate-900 bg-green-500">
                {cart?.length}
              </span>
            )}
          </Link>
          <Link to={"/wishlist"} className="text-red-300 animate-fade-in-top-3">
            <BsSuitHeartFill />
          </Link>
          <Link
            to={"/profile"}
            className={`${
              !isLogged && "hidden"
            } animate-fade-in-top-5 text-blue-500`}
          >
            <FaUserCircle />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
