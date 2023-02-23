import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/userSlice";

import BackBox from "../components/BackBox";
// import Button from "../components/Button";
import Inputs from "../components/Inputs";

import { loginFields } from "../constants/formField";


const Login = () => {
  const [loginState, setLoginState] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(loginState));
  };

  return (
    <div className="flex w-[40rem] h-[17rem] bg-[#404040] items-center justify-center text-white">
      <BackBox
        heading="Don't have an account?"
        paragraph="Register for great service"
        linkName="Register"
        linkUrl="/register"
      />

      <div className="w-[20rem] h-[22rem] bg-[#FFFFFF]  rounded-[25px] ml-[25px] ">
        <h1 className=" text-[#35B729] text-[22px] font-bold text-center mt-8">
          LOG IN
        </h1>
        <form onSubmit={submitHandler}>
          <div className="space-y-5 text-center mt-8 mb-4">
            {loginFields.map((field) => (
              <Inputs
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <h1 className="text-black text-center">FORGET PASSWORD?</h1>
         
            <button
              type="submit"
              className=" bg-[#35B729] w-[80px] text-center text-sm rounded-lg py-1 font-light mt-4 ml-4"
            >
              LOG IN
            </button>
     
          
          {/* <Button linkName="LOG IN" linkUrl="" /> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
