import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const AlaTooSquareMap = () => {
  const position = [42.8747222222, 74.6122222222]; 
  const zoomLevel = 16; 

  return (
    <MapContainer
      center={position}
      zoom={zoomLevel}
      style={{ height: "400px", width: "0%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Ala-Too Square</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AlaTooSquareMap;
