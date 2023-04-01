import React from 'react';

const Button = ({ styles, text }) => {
    return (
        <button
            className={`bg-blue-gradient font-meduim py-4 px-6 font-poppins text-lg text-primary outline-none ${styles} rounded-[10px]`}
        >
            {text}
        </button>
    );
};

export default Button;
