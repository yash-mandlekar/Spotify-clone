import React from 'react';

const Span = (props) => {
  return (
    <span className={props.Class}>{props.children}</span>
  );
}

export default Span;
