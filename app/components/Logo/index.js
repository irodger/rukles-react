import React from "react";
import classNames from 'classnames';
import Logotype from "./Logotype";
import Slogan from "./Slogan";

import './Logo.scss';

const Logo = ({ className }) => (
  <div className="logo">
    <Logotype size={100} className={classNames("logo__icon", className)} />
    <Slogan className="logo__slogan" />
  </div>
);

export default Logo;
