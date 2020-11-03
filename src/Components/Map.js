import React from 'react';
import './Map.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import { showDataOnMap } from '../util';

const Map = ({countriesData}) => {
  return (
    <div className="map">
      <MapContainer center={[46,2]} zoom={3}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countriesData)}
      </MapContainer>
    </div>
  )
}

export default Map
