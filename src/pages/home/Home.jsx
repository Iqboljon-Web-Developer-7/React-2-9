import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isLogged = useSelector((state) => state.isLogged.value);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <main>
      <Hero />
      <Products />
    </main>
  );
};

export default Home;
