import React from 'react';
import { Link } from 'react-router-dom';

const BackBox = ({heading,paragraph,linkName,linkUrl="#"}) => {
    return (
        <div className='ml-10'>
            <h2 className='text-[20px] font-normal py-3'>
                {heading}
            </h2>
            <p className='text-[15px] pt-3 pb-8'>
                {paragraph}
            </p>
            <Link to={linkUrl} className='border-2 border-white rounded-lg p-2 font-normal text-xs mt-4 '>
                {linkName}
            </Link>
            

        </div>
    );
};

export default BackBox;