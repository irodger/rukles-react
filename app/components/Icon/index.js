import React from 'react';
import './Icon.scss';

const Icon = (props) => {
  const {
    viewBox = '0 0 24 24',
    size = 24,
    className = 'icon',
    children,
  } = props;

  return (
    <svg
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={viewBox}
    >
      { children }
    </svg>
  );
};

export default Icon;