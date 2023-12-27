import React, { useState } from 'react';
import './search.scss';

const Search = ({ onRegionChange, onCountryChange }) => {
  const [region, setRegion] = useState('All');
  const [country, setCountry] = useState('');

  const handleRegion = (value) => {
    setRegion(value);
    onRegionChange(value);
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
    onCountryChange(value);
  };

  console.log(country);

  return (
    <div className="search_bar">
      <div className="input_text">
        <input
          type="text"
          placeholder="Entry Name of Country....."
          onChange={handleCountryChange}
        />
      </div>
      <div className="input_select">
        <div className="select-box">
          <div className="select-box__current" tabIndex="1">
            <p className="select-box__input-text">{region}</p>
            <img
              className="select-box__icon"
              src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
              alt="Arrow Icon"
              aria-hidden="true"
            />
          </div>
          <ul className="select-box__list">
          <li>
              <label
                className="select-box__option"
                htmlFor="0"
                aria-hidden
                onClick={() => handleRegion('All')}
              >
                All
              </label>
            </li>
            <li>
              <label
                className="select-box__option"
                htmlFor="0"
                aria-hidden
                onClick={() => handleRegion('Oceania')}
              >
                Oceania
              </label>
            </li>
            <li>
              <label
                className="select-box__option"
                htmlFor="1"
                aria-hidden
                onClick={() => handleRegion('Europe')}
              >
                Europe
              </label>
            </li>
            <li>
              <label
                className="select-box__option"
                htmlFor="2"
                aria-hidden
                onClick={() => handleRegion('Asia')}
              >
                Asia
              </label>
            </li>
            <li>
              <label
                className="select-box__option"
                htmlFor="3"
                aria-hidden
                onClick={() => handleRegion('Americas')}
              >
                America
              </label>
            </li>
            <li>
              <label
                className="select-box__option"
                htmlFor="4"
                aria-hidden
                onClick={() => handleRegion('Africa')}
              >
                Africa
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;