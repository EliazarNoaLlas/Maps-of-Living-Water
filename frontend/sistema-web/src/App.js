import React from 'react';
import MapView from './components/MapView';
import Sidebar from './components/Sidebar'; // Importamos el componente Sidebar
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Agua limpia y saneamiento: cree un flujo que muestre la cuenca hidrográfica de Cusco</h1>
      </header>
      <main className="main-container">
        <Sidebar />
        <div className="map-container">
          <MapView />
        </div>
      </main>
    </div>
  );
};

export default App;
