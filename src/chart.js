import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

export default function Drawing({ chartData }) {
  return (
    <div className="chart m-10 w-50 h-80">
      <Bar
        width={100}
        height={99}
        data={chartData}
        options={{
          title: {
            display: true,
            text: "",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "bottom",
          },
          maintainAspectRatio: false,
        }}
      />

      <Doughnut
        width={100}
        height={99}
        data={chartData}
        options={{
          title: {
            display: true,
            text: "",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "bottom",
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
