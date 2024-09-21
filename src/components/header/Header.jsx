import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";

import { Form, Input, InputNumber, Select, Button, Upload } from "antd";

import logo from "@/assets/logo.svg";
import UniModal from "../modal/Modal";
import { useCreateCarMutation } from "@/redux/api/sclices/productSlice";

const Header = () => {
  const [createCar] = useCreateCarMutation();
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    createCar(values).then((res) => console.log(res));
    // console.log("Form Values:", values);
  };
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
          <UniModal title={"Create Car"}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-200 p-4 rounded-lg"
            >
              <Form.Item
                className="m-0"
                label="Name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Images"
                name="images"
              >
                <Input placeholder="Enter img url" />
              </Form.Item>

              <Form.Item
                className="m-0"
                label="Price"
                name="price"
                rules={[{ required: true }]}
              >
                <InputNumber min={0} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                className="m-0"
                label="Status"
                name="status"
                rules={[{ required: true }]}
              >
                <Select>
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                </Select>
              </Form.Item>

              <Form.Item
                className="m-0"
                label="Rent Price"
                name="rent_price"
                rules={[{ required: true }]}
              >
                <InputNumber min={0} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Color"
                name="color"
              >
                <Input />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Model"
                name="model"
              >
                <Input />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Year"
                name="year"
              >
                <InputNumber
                  min={1900}
                  max={new Date().getFullYear()}
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Fuel Type"
                name="fuel"
              >
                <Select>
                  <Option value="petrol">Petrol</Option>
                  <Option value="diesel">Diesel</Option>
                  <Option value="electric">Electric</Option>
                </Select>
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Transmission"
                name="transmission"
              >
                <Select>
                  <Option value="automatic">Automatic</Option>
                  <Option value="manual">Manual</Option>
                </Select>
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Seats"
                name="seats"
              >
                <InputNumber min={1} max={8} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Discount (%)"
                name="discount"
              >
                <InputNumber min={0} max={100} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Fuel Capacity (liters)"
                name="capacity_fuel"
              >
                <InputNumber min={0} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Usage per km (liters)"
                name="usage_per_km"
              >
                <InputNumber min={0} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                className="m-0"
                label="Description"
                name="description"
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item className="m-0">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </UniModal>
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
