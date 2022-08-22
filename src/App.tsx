import React from "react";
import Charts from "./components/Charts";

import Data from "./data/Wine-Data.json";

function App() {
  const data = JSON.parse(JSON.stringify(Data));

  return (
    <div className="App">
      <div className="box">Assignment: Typescript Developer job</div>

      <Charts data={data} />

      <div className="footer">By: Meshaal Noureldien</div>
    </div>
  );
}

export default App;
