import React from 'react';
import classNames from 'classnames';
import './GeneratorResultItem.scss';

const RefreshIcon = ({ theme = 'dark' }) => {
  const colors = {
    dark: '#5c4c72',
    light: '#FFA545',
  };

  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.2 487.2">
        <path
          fill={colors[theme]}
          d="M55.3 203.6a39 39 0 0035.9-23.8A165.5 165.5 0 01243.6 78.2c37.8 0 72.5 13 100.2 34.4l-21.7 3.4a17 17 0 00-4.4 32.3L437.5 202a17 17 0 0024-15.4l.5-132a17 17 0 00-31-9.4L414.3 70A242.8 242.8 0 00243.6 0 243.9 243.9 0 0019.2 149a39.3 39.3 0 0036.1 54.6zM464.6 301.2a39 39 0 00-68.6 6.3A165.5 165.5 0 01243.6 409c-37.8 0-72.4-13-100.2-34.5l21.8-3.4a17 17 0 004.3-32.2L49.8 285a17 17 0 00-24 15.5l-.6 132a17 17 0 0031.1 9.4l16.5-24.8a242.8 242.8 0 00170.8 70.1 243.9 243.9 0 00224.5-149c5.1-12.2 3.8-26-3.5-37z"
        />
    </svg>
)};

const GeneratorResultItem = ({ text, onChange, theme, className }) => {
  if (!text) return null;

  return (
    <div className={classNames("generator-result-item", className)}>
      <p className="generator-result-item__title">{text}</p>
      <button className="generator-result-item__close" title="Удалить слово" onClick={onChange}>
        <RefreshIcon theme={theme}/>
      </button>
    </div>
  );
};

export default GeneratorResultItem;
