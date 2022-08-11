import React, { useState, useEffect } from "react";
import icon from "../img/icon.jpg";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as storeData from "./dataStores.json";
import mapStyles from "./mapStyles";

function Map() {
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedStore(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {storeData.features.map((store) => (
        <Marker
          key={store.properties.STORE_ID}
          position={{
            lat: store.geometry.coordinates[1],
            lng: store.geometry.coordinates[0],
          }}
          onClick={() => {
            setSelectedStore(store);
          }}
          icon={{
            url: icon,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}

      {setSelectedStore && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedStore(null);
          }}
          position={{
            lat: setSelectedStore.geometry.coordinates[1],
            lng: setSelectedStore.geometry.coordinates[0],
          }}
        >
          <div>
            <h2>{setSelectedStore.properties.NAME}</h2>
            <p>{setSelectedStore.properties.ADDRESS}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMaps() {
  return (
    <div style={{ width: "30vw", height: "30vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,
        places&key=AIzaSyAslWENYJDBstFgEJ3YMsOz8V-JV5OUpnY`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
