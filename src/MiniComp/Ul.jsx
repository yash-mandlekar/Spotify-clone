import React from 'react';

const Ul = (props) => {
  return (
    <ul className={props.Class}>
        {props.children}
    </ul>
  );
}

export default Ul;
