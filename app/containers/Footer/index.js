import React from 'react';

import './Footer.scss';

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__copyrights">
          © 2015 - {currYear}
          {" "}
          <a href="http://irodger.ru" className="footer__link" rel="noopener" target="_blank">iRodger</a> v. 1.0.0
        </div>
      </div>
    </footer>
  );
};

export default Footer;
