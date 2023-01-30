import React from "react";

const Input = (props) => {
  return (
    <input
      className={props?.Class}
      type={props?.Type}
      name={props?.Name}
      placeholder={props?.Placeholder}
      value={props?.Value}
      onChange={props?.OnChange}
      required={props?.Required}
    />
  );
};

export default Input;
