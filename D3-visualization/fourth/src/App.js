import React, { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./chart";
import BarChart1 from "./chart2";

const data1 = [600, 40, 50, 80, 90];
const data2 = [400, 30, 20, 50, 50];

function App() {
  const [top, setTop] = useState(true);
  const position = () => {
    return setTop(!top);
  };
  return (
    <div className="App">
      <h2>Sample graph</h2>
      {top ? (
        <BarChart width={600} height={400} data={data1} data1={data2} />
      ) : (
        <BarChart1 width={600} height={400} data={data1} data1={data2} />
      )}
      {/* <BarChart width={600} height={400} data={data1} data1={data2} /> */}
      <button onClick={() => position()}>change position</button>
    </div>
  );
}

export default App;
