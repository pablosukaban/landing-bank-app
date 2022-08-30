import React from 'react';

const Button = ({ styles, text }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient font-poppins font-meduim text-lg text-primary outline-none ${styles} rounded-[10px]`}
    >
      {text}
    </button>
  );
};

export default Button;
