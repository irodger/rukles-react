import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = (props) => {
  const { children, className, style, onClick } = props;

  const buttonClass = classNames(
    'button',
    className,
    {
      ['button_cta']: style === 'cta',
    },
  );

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
