import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className=' lg:flex w-[40rem] h-60 bg-[#404040] items-center justify-center text-white'>
        <Link to="/login"><button>Login</button></Link>
        <h1 className='hidden lg:flex w-[20rem] h-80 bg-[#FFFFFF]  rounded-[25px] text-[#35B729] text-[22px] font-bold text-center'> REGISTER</h1>
     </div>
    );
};

export default Register;