import React from 'react';

const fixedInputClass=' bg-[#F2F2F2] w-[280px] pl-2 py-2 ' 

const Inputs = ({
    handleChange,
    value,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}) => {
    return (
        <div>
            <input
             onChange={handleChange}
             value={value}
             id={id}
             name={name}
             type={type}
             required={isRequired}
             placeholder={placeholder}
             className={fixedInputClass+customClass}
            
            />
            
        </div>
    );
};

export default Inputs;