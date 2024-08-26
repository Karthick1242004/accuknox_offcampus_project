import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Eat", 2],
  ["Commute", 2],
];

const options = {
  title: "Cloud Accounts",
  pieHole: 0.4,
  is3D: false,
};

function Piechart() {
  return (
    <Chart
      chartType="PieChart"
      width="400px"
      height="300px"
      data={data}
      options={options}
    />
  );
}

export default Piechart;
