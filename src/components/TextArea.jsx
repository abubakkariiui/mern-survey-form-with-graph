import React from "react";

const TextArea = ({ placeholder, onChange, value, required }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2 pb-1">
        {placeholder}
      </label>
      <textarea
        required={required}
        value={value}
        onChange={onChange}
        rows="5"
        className=" text-slate-800 rounded shadow outline-none focus:outline-none focus:border-b focus:border-purple-800 w-full "
      />
    </div>
  );
};

export default TextArea;
