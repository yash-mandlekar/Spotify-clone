import React from "react";

const Button = (props) => {
  return (
    <button
      className={props?.Class}
      type={props?.Type}
      onClick={props?.OnClick}
    >
      {props?.children}
    </button>
  );
};

export default Button;
