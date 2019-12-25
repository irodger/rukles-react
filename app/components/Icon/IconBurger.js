import React from 'react';
import Icon from 'components/Icon';

const IconBurger = (props) => {
  const { size, className } = props;

  return (
    <Icon className={className} size={size} viewBox="0 0 290 290">
      <path fill="#ddaf6d" d="M145 9C64.3 9 9 49.9 9 99.8v9c0 5.5 3.7 9 9.1 9h253.7c5.5 0 9-3.5 9-9v-9C280.9 49.8 225.7 9 145 9zM9 262.9c0 10 8.2 18 18.2 18h235.6c10 0 18-8 18-18v-10c0-4.5-3.5-8.2-8-8.2H17.1a8.1 8.1 0 0 0-8.1 8.2v10z"/>
      <path fill="#bb6f39" d="M18.1 208.4h253.7c10 0 18.1 8.1 18.1 18.1 0 10-8.1 18.1-18 18.1H18c-10 0-18.1-8.1-18.1-18s8.2-18.2 18.1-18.2z"/>
      <path fill="#efc75e" d="M18.1 172.2h253.7v36.2h-18.1l-27.2 27.2-27.2-27.2H18.1v-36.2z"/>
      <path fill="#bf392c" d="M18.1 117.8h253.7V145H18.1v-27.2z"/>
      <path fill="#c69d63" d="M18.1 117.8h18.1c-5.4 0-9-3.6-9-9v-9.1c0-48 50.7-87 126.8-90.6h-9C64.3 9 9 49.8 9 99.7v9c0 5.5 3.7 9 9.1 9zM27.2 262.8v-18.2h-10a8.1 8.1 0 0 0-8.1 8.2v10c0 10 8.1 18 18 18h18.2c-10 0-18.1-8-18.1-18z"/>
      <path fill="#ae3c30" d="M18.1 117.8h18.1V145H18.1z"/>
      <path fill="#d7b354" d="M19 172.2l-.9 17.2v19h18.1v-19c-9-1-15.4-8.2-17.2-17.2z"/>
      <path fill="#3db39e" d="M271.8 145.9l-253.7-1v1a22.4 22.4 0 0 0 4.6 44.4c10.8 0 19.9-8.2 21.7-18.1h37.1c0 10 10 18 22.7 18s22.6-8 22.6-18h36.3c0 10 10 18 22.6 18s22.7-8 22.7-18h37.1a22.4 22.4 0 0 0 44.4-4.6c0-10.9-8.1-20-18-21.7z"/>
      <path fill="#37a18e" d="M1 173c0 1 .8 1.9.8 2.8s0 .9 1 1.8c0 .9.8 1.8.8 1.8 0 1 1 1 1 1.8.8 1 .8 1 1.7 1.8l1 1 1.8 1.7.9 1c.9.9 1.8.9 2.7.9.9 0 .9.9 1.8.9s1.8.9 3.6.9h1c.8.9 1.7.9 3.5.9 3.7 0 6.4-1 9.1-1.8a22.4 22.4 0 0 1 4.5-42.6v-1h-18v1A22.4 22.4 0 0 0 0 167.6v4.6c1 0 1 .9 1 .9z"/>
      <path fill="#a86433" d="M18.1 226.5c0-10 8.2-18.1 18.1-18.1h-18a18.2 18.2 0 0 0 0 36.2h18c-10 0-18-8.1-18-18z"/>
    </Icon>
  );
};

export default IconBurger;
