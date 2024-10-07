import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Monitoreo de Calidad de Agua - Cusco</h2>
      </div>
      <ul className="sidebar-menu">
        {/* Sección de Selección de Cuenca */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("cuenca")}>
            Selección de Cuenca
          </button>
          {activeSection === "cuenca" && (
            <div className="accordion-content">
              <ul>
                <li>Urubamba</li>
                <li>Apurímac</li>
                <li>Otras cuencas relevantes</li>
              </ul>
            </div>
          )}
        </li>

        {/* Sección de Cuerpo de Agua */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("cuerposAgua")}>
            Cuerpo de Agua
          </button>
          {activeSection === "cuerposAgua" && (
            <div className="accordion-content">
              <ul>
                <li>Río Vilcanota</li>
                <li>Río Huatanay</li>
                <li>Río Urubamba</li>
                <li>Río Salcca</li>
                <li>Quebrada Chocco</li>
                <li>Otros ríos y quebradas</li>
              </ul>
            </div>
          )}
        </li>

        {/* Sección de Punto de Muestreo */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("puntoMuestreo")}>
            Punto de Muestreo
          </button>
          {activeSection === "puntoMuestreo" && (
            <div className="accordion-content">
              <select>
                <option>RVilc1</option>
                <option>RHuat6</option>
                <option>ROtro</option>
              </select>
            </div>
          )}
        </li>

        {/* Sección de Período de Tiempo */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("periodo")}>
            Período de Tiempo
          </button>
          {activeSection === "periodo" && (
            <div className="accordion-content">
              <ul>
                <li>Año</li>
                <li>Mes (si aplica)</li>
              </ul>
            </div>
          )}
        </li>

        {/* Sección de Parámetros de Calidad */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("parametros")}>
            Parámetros de Calidad
          </button>
          {activeSection === "parametros" && (
            <div className="accordion-content">
              <ul>
                <li><input type="checkbox" /> pH</li>
                <li><input type="checkbox" /> Conductividad</li>
                <li><input type="checkbox" /> Turbidez</li>
                <li><input type="checkbox" /> Oxígeno disuelto</li>
                <li><input type="checkbox" /> DBO5</li>
              </ul>
            </div>
          )}
        </li>

        {/* Sección de Comparar con ECA */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("compararECA")}>
            Comparar con ECA
          </button>
          {activeSection === "compararECA" && (
            <div className="accordion-content">
              <ul>
                <li><input type="radio" name="eca" /> Cat.3-D1 (Riego de vegetales)</li>
                <li><input type="radio" name="eca" /> Cat.3-D2 (Bebida de animales)</li>
              </ul>
            </div>
          )}
        </li>

        {/* Sección de Tipo de Visualización */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("visualizacion")}>
            Tipo de Visualización
          </button>
          {activeSection === "visualizacion" && (
            <div className="accordion-content">
              <ul>
                <li>Gráficos de tendencia</li>
                <li>Tablas de datos</li>
                <li>Mapas de calor</li>
              </ul>
            </div>
          )}
        </li>

        {/* Botón para generar informe */}
        <li>
          <button className="generate-report-btn">Generar Informe</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
