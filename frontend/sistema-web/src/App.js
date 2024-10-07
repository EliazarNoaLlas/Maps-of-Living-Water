import React from 'react';
import MapView from './components/MapView';
import Sidebar from './components/Sidebar'; // We import the Sidebar component
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Clean water and sanitation: create a flow to display the Cusco watershed</h1>
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
