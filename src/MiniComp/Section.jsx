import React from "react";

const Section = (props) => {
  return <section className={props.Class}>{props.children}</section>;
};

export default Section;
