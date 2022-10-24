import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Observation from "./EditableGrid/Table";
import LineChartExample from "./recharts/Line";

function App() {

  return (
    <div className="App">
      {/*<Observation />*/}
        <LineChartExample />
    </div>
  );
}

export default App;
