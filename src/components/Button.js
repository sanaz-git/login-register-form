import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({linkName,linkUrl="#"}) => {
    return (
        <div className=' bg-[#35B729] w-[80px] text-center text-sm rounded-lg py-1 font-light mt-4 ml-4'>
           <Link to='linkUrl' >{linkName}</Link>
        </div>
    );
};

export default Button;