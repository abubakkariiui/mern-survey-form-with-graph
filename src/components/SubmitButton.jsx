import React from "react";

const SubmitButton = ({ text, onClick, type, href }) => {
  return (
    <a href={href}>
      <button
        className="bg-purple-800 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </a>
  );
};

export default SubmitButton;
