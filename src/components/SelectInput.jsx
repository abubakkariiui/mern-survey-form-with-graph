import React from "react";

const SelectInput = ({ options, label, onChange, value, required }) => {
  return (
    <div className="flex flex-wrap py-4">
      <label className="text-gray-700 text-sm font-bold mb-2 pb-1 w-full">
        {label}
      </label>

      <select
        name={label}
        onChange={onChange}
        required={required}
        value={value === "" ? "default" : value}
        className=" border-r-8 border-transparent p-3 p-3 text-slate-800 shadow rounded focus:outline-none focus:border-b focus:border-purple-800 w-full  "
      >
        <option value="default" disabled hidden>
          Select an Option
        </option>
        {options
          ? options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default SelectInput;
