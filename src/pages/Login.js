import React, { useState } from "react";
import BackBox from "../components/BackBox";
import Inputs from "../components/Inputs";
import { loginFields } from "../constants/formField";

const Login = () => {
  const [loginState, setLoginState] = useState({});

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex w-[40rem] h-60 bg-[#404040] items-center justify-center text-white">
      <BackBox
        heading="Don't have an account?"
        paragraph="Register for great service"
        linkName="Register"
        linkUrl="/register"
      />

      <div className="w-[20rem] h-80 bg-[#FFFFFF]  rounded-[25px] ml-[50px] items-center justify-center">
        <h1 className=" text-[#35B729] text-[22px] font-bold  ">LOG IN</h1>
        <form>
          <div className="py-8">
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
        </form>
        <h1 className='text-black'>FORGET PASSWORD?</h1>
      </div>
    </div>
  );
};

export default Login;
