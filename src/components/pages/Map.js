import React from 'react';
import { Map, GeoJsonLoader } from "pigeon-maps";
import "./style.css";

const geoJsonLink = "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json"


const Mapp = () => {
    return (
        <div className='Map'>
            <Map height={800} width={800} defaultCenter={[51.65534638735004, 10.099557942382829]} defaultZoom={6}>
            <GeoJsonLoader
        link={geoJsonLink}
        styleCallback={(feature, hover) =>
          hover
            ? { fill: '#93c0d099', strokeWidth: '2'}
            : { fill: '#d4e6ec99', strokeWidth: '1'}
        }
      />
    </Map>
        </div>
    );
}

export default Mapp;
