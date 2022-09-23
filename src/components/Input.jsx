import React from "react";

const Input = ({ type, placeholder, value, onChange, required }) => {
  return (
    <div className="py-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 pb-1"
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        required={required}
        className="p-3 p-3 text-slate-800 shadow rounded focus:outline-none focus:border-b focus:border-purple-800 w-full  "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
