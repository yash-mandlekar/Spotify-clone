import React from "react";

const Input = (props) => {
  return (
    <input
      className={props?.className}
      type={props?.type}
      name={props?.name}
      placeholder={props?.placeholder}
      value={props?.value}
      onChange={props?.OnChange}
      required={props?.required}
    />
  );
};

export default Input;
