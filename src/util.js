import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

export const sort = (data) => (
  data.slice().sort((a, b) => 2*(a.cases < b.cases)-1)
);

export const showDataOnMap = (data) => (
  data.map((country, i) => (
    <Circle
      key={i}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color="#cc1034"
      fillColor="#cc1034"
      radius={Math.sqrt(country['cases']) * 400}
    >
      <Popup>
        <div className="map__popup">
          <div className="map__name"><strong>{country.country}</strong></div>
          <div>Cases: {numeral(country.cases).format("0,0")}</div>
          <div>Recovered: {numeral(country.recovered).format("0,0")}</div>
          <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>

    </Circle>
  ))
)