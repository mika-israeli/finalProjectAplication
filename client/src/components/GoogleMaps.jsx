import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
// import * as parkData from "./data/skateboard-parks.json";
// import mapStyles from "./mapStyles";

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
      //   defaultOptions={{ styles: mapStyles }}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function GoogleMaps() {
  return (
    <div style={{ width: "50px", height: "50px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAslWENYJDBstFgEJ3YMsOz8V-JV5OUpnY`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
