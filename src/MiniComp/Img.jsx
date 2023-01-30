import React from 'react';

const Img = (props) => {
  return (
    <img className={props.Class} src={props.Src} alt={props.Alt} />
  );
}

export default Img;
