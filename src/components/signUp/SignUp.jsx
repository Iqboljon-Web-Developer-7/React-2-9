import React from "react";
import { Button, Form, Input, message } from "antd";
import { useSignUpMutation } from "@/redux/api/sclices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    signUp({ body: values }).then((res) => {
      console.log(res);
      res.error && message.error(res.error.data.message);
      if (res.data) {
        let email = btoa(values.email);
        navigate(`/otp?email=${email}`);
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-4">
      <h2 className="text-3xl">SignUp</h2>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="min-w-80"
      >
        <Form.Item
          label="Firstname"
          name="first_name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input placeholder="youremail@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="flex justify-between items-center">
          <Form.Item className="flex justify-center">
            <Button type="default">
              <Link to={"/"}>Cancel</Link>
            </Button>
          </Form.Item>

          <Form.Item className="flex justify-center">
            <Button type="default">
              <Link to={"/otp"}>Veify</Link>
            </Button>
          </Form.Item>

          <Form.Item className="flex justify-center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
        <div className="text-center mb-4">
          <p className="flex items-center justify-center gap-4">
            Already has account ?{" "}
            <Link to={"/sign-in"} className="underline underline-offset-2">
              Sign In
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
