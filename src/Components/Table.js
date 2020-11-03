import React from 'react'
import './Table.css'
import numeral from 'numeral';

const Table = ({countriesData, onCountryChange}) => (
  <div className="table">
    <h3>Cases per Millions per Country</h3>
    <table>
      <tbody>
        {countriesData?.slice().sort((a,b) => b.casesPerOneMillion-a.casesPerOneMillion).map(({country, casesPerOneMillion, countryInfo: {iso3}}, i) => (
          <tr key={i}>
            <td onClick={() => onCountryChange({target: {value: iso3}})}>{country}</td>
            <td><strong>{numeral(casesPerOneMillion).format("0.[0]a")}</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Table
