import React from "react";

const RadioInput = ({ options, label, onChange, name, required, value }) => {
  return (
    <div className="flex flex-wrap py-4">
      <label className="text-gray-700 text-sm font-bold mb-2 pb-1 w-full">
        {label}
      </label>
      <div className="flex items-center justify-center justify-items-center">
        {options
          ? options.map((option, index) => {
              return (
                <div key={index} className="flex items-center mb-4 mr-5">
                  <input
                    id={index}
                    type="radio"
                    value={option}
                    name={name}
                    className="w-4 h-4"
                    onChange={onChange}
                    required={required}
                    checked={option === value}
                  />
                  <label
                    htmlFor="1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {option}
                  </label>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default RadioInput;
