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
        <h2 className="sidebar-title">Water Quality Monitoring - Cusco</h2>
      </div>
      <ul className="sidebar-menu">
        {/* Watershed Selection Section */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("watershed")}>
            Watershed Selection
          </button>
          {activeSection === "watershed" && (
            <div className="accordion-content">
              <ul>
                <li>Urubamba</li>
                <li>Apurímac</li>
                <li>Other relevant watersheds</li>
              </ul>
            </div>
          )}
        </li>

        {/* Water Body Section */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("waterBodies")}>
            Water Body
          </button>
          {activeSection === "waterBodies" && (
            <div className="accordion-content">
              <ul>
                <li>Vilcanota River</li>
                <li>Huatanay River</li>
                <li>Urubamba River</li>
                <li>Salcca River</li>
                <li>Chocco Creek</li>
                <li>Other rivers and creeks</li>
              </ul>
            </div>
          )}
        </li>

        {/* Sampling Point Section */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("samplingPoint")}>
            Sampling Point
          </button>
          {activeSection === "samplingPoint" && (
            <div className="accordion-content">
              <select>
                <option>RVilc1</option>
                <option>RHuat6</option>
                <option>ROther</option>
              </select>
            </div>
          )}
        </li>

        {/* Time Period Section */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("timePeriod")}>
            Time Period
          </button>
          {activeSection === "timePeriod" && (
            <div className="accordion-content">
              <ul>
                <li>Year</li>
                <li>Month (if applicable)</li>
              </ul>
            </div>
          )}
        </li>

        {/* Quality Parameters Section */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("qualityParameters")}>
            Quality Parameters
          </button>
          {activeSection === "qualityParameters" && (
            <div className="accordion-content">
              <ul>
                <li><input type="checkbox" /> pH</li>
                <li><input type="checkbox" /> Conductivity</li>
                <li><input type="checkbox" /> Turbidity</li>
                <li><input type="checkbox" /> Dissolved oxygen</li>
                <li><input type="checkbox" /> BOD5</li>
              </ul>
            </div>
          )}
        </li>

        {/* Compare with ECA Section */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("compareECA")}>
            Compare with ECA
          </button>
          {activeSection === "compareECA" && (
            <div className="accordion-content">
              <ul>
                <li><input type="radio" name="eca" /> Cat.3-D1 (Vegetable irrigation)</li>
                <li><input type="radio" name="eca" /> Cat.3-D2 (Animal drinking)</li>
              </ul>
            </div>
          )}
        </li>

        {/* Visualization Type Section */}
        <li className="accordion-item">
          <button className="accordion-trigger" onClick={() => toggleSection("visualization")}>
            Visualization Type
          </button>
          {activeSection === "visualization" && (
            <div className="accordion-content">
              <ul>
                <li>Trend charts</li>
                <li>Data tables</li>
                <li>Heat maps</li>
              </ul>
            </div>
          )}
        </li>

        {/* Button to generate report */}
        <li>
          <button className="generate-report-btn">Generate Report</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
