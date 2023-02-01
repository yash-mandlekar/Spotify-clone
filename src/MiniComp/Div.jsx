import React from "react";

const Div = (props) => {
  return (
    <div
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Div;
