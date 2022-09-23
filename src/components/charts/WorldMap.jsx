import React from "react";
import { Chart } from "react-google-charts";

const WorldMapComp = ({ data }) => {
  return (
    <div className="App">
      <Chart chartType="GeoChart" width="100%" height="400px" data={data} />
    </div>
  );
};

export default WorldMapComp;
