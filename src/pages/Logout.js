import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Button from '../components/Button';
import { logout } from "../redux/auth/userSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      Hello user!
      <Link to="/">
      <button
        type="submit"
        onClick={(e) => handleLogout(e)}
        className=" bg-[#35B729] w-[80px] text-center text-sm rounded-lg py-1 font-light mt-4 ml-4"
      >
        LOGOUT
      </button>
      </Link>
     
      {/* <Button linkName="LOG OUT" linkUrl="/" /> */}
    </div>
  );
};

export default Logout;
