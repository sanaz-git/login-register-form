import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className=' flex w-[40rem] h-60 bg-[#404040] items-center justify-center text-white'>
         
            <Link to="/register"><button>Register</button></Link>
           <h1 className='w-[20rem] h-80 bg-[#FFFFFF]  rounded-[25px] text-[#35B729] text-[22px] font-bold items-center justify-center'> LOG IN</h1>
        
        
        </div>
    );
};

export default Login;