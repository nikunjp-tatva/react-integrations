import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import keys from "../configs/keys";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 22.6708, // default latitude
  lng: 71.5724, // default longitude
};

export default function GoogleMapIntegration() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: keys.googleMapAPIKey,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
