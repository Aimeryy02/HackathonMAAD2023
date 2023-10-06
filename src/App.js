import { useState, useEffect } from "react";
import './App.css';
import { Map, Marker, GeoJsonLoader } from "pigeon-maps";
// import SurfaceGrid from "./components/SurfaceGrid";

function App() {

  const [surfaces, setSurfaces] = useState([])

  useEffect(() => {
    fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/stationnement-sur-voie-publique-emprises/records?limit=20")
      .then(res => 
        res.json()
      )
      .then(data => {
        console.log(data, "DATA");
        setSurfaces(data.surfaces);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      {/* <SurfaceGrid surfaces={surfaces} /> */}
      <p>{surfaces}</p>
        <Map height={800} width={800} defaultCenter={[48.866667, 2.333333]} defaultZoom={11}>
      <Marker width={50} anchor={[48.866667, 2.333333]} />
      {/* <GeoJsonLoader
        link={surfaces.geo_shape}
        styleCallback={(feature, hover) =>
          hover
            ? { fill: '#93c0d099', strokeWidth: '2'}
            : { fill: '#d4e6ec99', strokeWidth: '1'}
        }
      /> */}
    </Map>
    </div>
  );
}

export default App;
