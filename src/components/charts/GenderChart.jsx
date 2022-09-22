import React from "react";
import { Chart } from "react-google-charts";

const GenderChart = ({ title, data }) => {
  const options = {
    title: title,
    is3D: true,
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default GenderChart;
