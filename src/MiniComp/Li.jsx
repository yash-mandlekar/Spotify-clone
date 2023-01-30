import React from 'react';

const Li = (props) => {
  return (
    <li className={props.Class}>
        {props.children}
    </li>
  );
}

export default Li;
