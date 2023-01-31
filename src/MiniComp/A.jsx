import React from "react";

const A = (props) => {
  return (
    <a href={props.Href} className={props.className}>
      {props.children}
    </a>
  );
};

export default A;
