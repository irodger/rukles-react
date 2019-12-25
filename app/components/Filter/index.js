import React, { useState } from 'react';
import filters from 'constants/filters';

import './Filter.scss';

const FilterMoreIcon = ({ className, onSelect }) => (
  <button type="button" className={className} onClick={onSelect}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#A4AC81"/>
      <circle cx="6" cy="12" r="2" fill="#423C52"/>
      <circle cx="12" cy="12" r="2" fill="#423C52"/>
      <circle cx="18" cy="12" r="2" fill="#423C52"/>
    </svg>
  </button>
);

const Filter = ({ currentFilter, onSelect }) => {
  const [filtersOpen, openFilters] = useState(false);
  const currentFilterItem = filters.find(item => item.alias === currentFilter);

  return (
    <div className="filter">
      <div className="filter__image">
        {currentFilterItem.icon}
        <FilterMoreIcon className="filter__options" onSelect={() => openFilters(!filtersOpen)} />

        {
          filtersOpen ?
            (<ul className="filter__list">
              {
                filters.map(item => (
                  <li  className="filter__list-item" key={item.alias} onClick={() => { onSelect(item.alias); openFilters(!filtersOpen); }}>
                    {item.icon}
                    <h4 className="filter__list-item-title">{item.title}</h4>
                  </li>
                ))
              }
            </ul>) : null
        }
      </div>
      <div className="filter__text">
        <h3 className="filter__title">{currentFilterItem.title}</h3>
        <p className="filter__label">выбранная тема</p>
        <p className="filter__description">{currentFilterItem.description}</p>
      </div>
    </div>
  );
};

export default Filter;
