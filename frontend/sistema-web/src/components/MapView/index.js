import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Importar los archivos GeoJSON
// Importación correcta de aguaCuerpos
import aguaCuerpos from "../limites-peru-geojson/agua_cuerpos.json";

// Configuración del icono del marcador personalizado
const markerIcon = new L.Icon({
  iconUrl: "/images/basin-icon.png", // URL de la imagen del marcador (ícono de la cuenca).
  iconSize: [30, 30], // Define el tamaño del icono.
  iconAnchor: [15, 30], // Punto del icono que se ancla al mapa.
  popupAnchor: [0, -30], // Posición del popup en relación al icono.
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // Sombra del marcador.
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function FireMap() {
  const [fireData, setFireData] = useState([]);

  useEffect(() => {
    async function fetchFireData() {
      try {
        const [peruResponse, boliviaResponse] = await Promise.all([
          fetch("http://localhost:5000/fires/peru"),
          fetch("http://localhost:5000/fires/bolivia"),
        ]);

        const peruData = await peruResponse.json();
        const boliviaData = await boliviaResponse.json();
        const combinedData = [
          ...parseCSV(peruData.data),
          ...parseCSV(boliviaData.data),
        ];
        setFireData(combinedData);
      } catch (error) {
        console.error("Error fetching fire data:", error);
      }
    }

    fetchFireData();
  }, []);

  function parseCSV(data) {
    const lines = data.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result;
  }

  return (
    <div style={{ flex: 1 }}>
      <MapContainer
        center={[-13.52, -71.97]} // Centro del mapa, aproximadamente en Cusco.
        zoom={8} // Ajuste del zoom para visualizar la región de Cusco.
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Itera sobre los datos de cuerpos de agua y crea un marcador para cada uno */}
        {aguaCuerpos.map((waterBody, index) => (
          <Marker
            key={index}
            position={waterBody.coordinates} // Usa las coordenadas de cada cuerpo de agua.
            icon={markerIcon}
          >
            <Popup>
              <strong>{waterBody.name}</strong>
              <br />
              {waterBody.description}
              <br />
              Altitud: {waterBody.altitude} m.s.n.m.
              <br />
              Categoría: {waterBody.category}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default FireMap;
