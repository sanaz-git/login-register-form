import React from 'react';

const fixedInputClass='px-3 py-2  bg-gray' 

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