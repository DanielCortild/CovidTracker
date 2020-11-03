import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './Header.css';

const Header = ({countries, country, onCountryChange}) => (
  <div className="header">
    <img src="covid.png" alt=""/>
    <FormControl className="header__dropdown">
      <Select variant="outlined" value={country} onChange={onCountryChange}>
        <MenuItem value="all">Worldwide</MenuItem>
        {countries?.map(({country, iso3}) => (<MenuItem key={iso3} value={iso3}>{country}</MenuItem>))}
      </Select>
    </FormControl>
  </div>
)

export default Header;
