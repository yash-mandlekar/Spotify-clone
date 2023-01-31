import React from 'react';

const Span = (props) => {
  return (
    <span className={props.className}>{props.children}</span>
  );
}

export default Span;
