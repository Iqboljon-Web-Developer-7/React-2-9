import { useOtpVerifyRequestMutation } from "@/redux/api/sclices/authSlice";
// import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { Button, Checkbox, Form, Input, message } from "antd";

const OTP = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [sendOtp, { isLoading }] = useOtpVerifyRequestMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("email")) {
      setEmail(atob(searchParams.get("email")));
    }
  }, [searchParams]);

  console.log(email);

  const onChange = (text) => {
    let request = {
      email,
      otp: text,
    };
    sendOtp({ body: request }).then((res) => {
      console.log(res);

      res.error && message.error(res.error.data.message);
      if (res.data) {
        navigate("/sign-in");
      }
    });
  };
  const sharedProps = {
    onChange,
  };
  return (
    <div className="flex items-center justify-center flex-col gap-4 min-h-screen bg-slate-300">
      <h1 className="text-3xl">Confirm email OTP code!</h1>
      <Input.OTP length={6} {...sharedProps} />

      <div className="flex justify-between gap-7">
        <Link to={"/"} className="underline underline-offset-2">
          Home
        </Link>
        <Link to="/resend-otp" className="underline underline-offset-2">
          Resend OTP!
        </Link>
      </div>
    </div>
  );
};

export default OTP;
