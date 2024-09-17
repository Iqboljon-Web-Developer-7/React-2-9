import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

import logo from "@/assets/logo.svg";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

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
        <div className="links flex items-center justify-center gap-3">
          <Link to={"/sign-up"} className="animate-fade-in-top-2">
            <Button type={"link"}>Sign Up</Button>
          </Link>
          <Link to={"/sign-in"} className="animate-fade-in-top-3">
            <Button type={"link"}>Sign In</Button>
          </Link>
          <Link
            to={"/profile"}
            className={`text-2xl ${
              !isLogged && "hidden"
            } animate-fade-in-top-5`}
          >
            <FaUserCircle className="text-slate-200" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
