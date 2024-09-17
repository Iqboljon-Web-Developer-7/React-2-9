import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "@/redux/api/sclices/authSlice";
import { useDispatch } from "react-redux";
import { loggedIn } from "@/redux/slices/isLogged";

const SignIn = () => {
  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    signIn({ body: values })
      .unwrap()
      .then((res) => {
        console.log(res);

        localStorage.setItem(
          "react-2-6-user-token",
          JSON.stringify(res.payload.accessToken)
        );
        dispatch(loggedIn());
        navigate("/");
        message.success("You Successfully logged in!");
      })
      .catch((error) => message.error(error.data.message));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-4">
      <h2 className="text-3xl">Sign in</h2>
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
            No account ?{" "}
            <Link to={"/sign-up"} className="underline underline-offset-2">
              Sign Up
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
