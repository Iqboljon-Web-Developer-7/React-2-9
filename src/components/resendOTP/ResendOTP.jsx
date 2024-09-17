import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Col, Form, Input, Row } from "antd";
import { useResendOTPMutation } from "@/redux/api/sclices/authSlice";

const ResendOTP = () => {
  const [resendOTP, { isLoading }] = useResendOTPMutation();

  const navigate = useNavigate();

  const onFinish = (values) => {
    // console.log("Success:", values);
    let email = btoa(values.email);
    resendOTP({ body: values });
    navigate(`/otp?email=${email}`);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-4 min-h-screen bg-slate-300">
      <h1 className="text-3xl">Enter email for code!</h1>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item>
          <Row gutter={8}>
            <Col span={16}>
              <Form.Item
                name="email"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input Email!",
                  },
                ]}
              >
                <Input placeholder="youremail@gmail.com" type="email" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Button htmlType="submit">Resend</Button>
            </Col>
            <Link
              to={"/"}
              className="text-center w-full mt-3 underline underline-offset-2"
            >
              Home
            </Link>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResendOTP;
