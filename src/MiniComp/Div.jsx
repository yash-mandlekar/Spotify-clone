import React from "react";

const Div = (props) => {
  return <div className={props.Class}>{props.children}</div>;
};

export default Div;
