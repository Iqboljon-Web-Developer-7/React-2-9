import React from "react";
import { useGetProfileQuery } from "@/redux/api/sclices/authSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedOut } from "@/redux/slices/isLogged";

const Profile = () => {
  let { data } = useGetProfileQuery();
  const dispatch = useDispatch();

  data = data?.payload;
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(loggedOut());
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4 flex-wrap justify-center gap-4 flex-col sm:flex-row text-center sm:text-left">
        <div>
          {data?.avatar ? (
            <img
              src={data.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full"
            />
          ) : (
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="w-24 h-24 rounded-full"
            />
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            First Name: {data?.first_name}
          </h2>
          <p className="text-gray-600">Email: {data?.email}</p>
          <p className="text-gray-600">Role: {data?.role}</p>
          <p>
            Status:{" "}
            <span
              className={`${
                data?.status === "active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {data?.status}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 text-center sm:text-left grid gap-3 sm:gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <p className="text-gray-600">Balance: {data?.balance}</p>
          <p className="text-gray-600">
            Email Verified:{" "}
            <span className="text-black">
              {data?.email_verified ? "Yes" : "No"}
            </span>
          </p>
          <p className="text-gray-600">Likes: {data?.likes?.length}</p>
        </div>
        <div>
          <p className="text-gray-600">
            Created At: {new Date(data?.createdAt).toLocaleString()}
          </p>
          <p className="text-gray-600">
            Updated At: {new Date(data?.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
      <Button
        onClick={() => handleLogOut()}
        className="mt-4 hover:text-red-400 hover:border-red-500"
      >
        LogOut
      </Button>
    </div>
  );
};

export default Profile;
