import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import SignUp from "@/components/signUp/SignUp";
import OTP from "@/components/OTP/OTP";
import SignIn from "@/components/signIn/SignIn";
import Profile from "@/components/profile/Profile";
import ResendOTP from "@/components/resendOTP/ResendOTP";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/resend-otp" element={<ResendOTP />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default Pages;
