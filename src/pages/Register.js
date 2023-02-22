import React, { useState } from "react";
import BackBox from "../components/BackBox";
import Button from "../components/Button";
import Inputs from "../components/Inputs";

import { registerFields } from "../constants/formField";
const Register = () => {
    const[registerState,setRegisterState]=useState({})

    const handleChange=(e) => setRegisterState({...registerState,[e.target.id]:e.target.value})


    const submitHandler = (event) => {
      event.preventDefault();
    }

  return (
    <div className=" flex w-[40rem] h-[17rem] bg-[#404040] items-center justify-center text-white">
        <div className="w-[20rem] h-[22rem] bg-[#FFFFFF]  rounded-[25px]  ">
      <h1 className=" text-[#35B729] text-[22px] font-bold text-center mt-8">REGISTER</h1>
        <form onSubmit={submitHandler}>
          <div className="space-y-5 text-center mt-8 mb-4">
            {registerFields.map((field) => (
              <Inputs
                key={field.id}
                handleChange={handleChange}
                value={registerState[field.id]}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>
        </form>

        <Button linkName="REGISTER" linkUrl="" />

      </div>
      <BackBox
        heading="Have an account?"
        paragraph="Log in to see all your collection."
        linkName="LOG IN"
        linkUrl="/login"
      />
      
    </div>
  );
};

export default Register;
