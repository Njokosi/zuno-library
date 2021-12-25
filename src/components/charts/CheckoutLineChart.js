import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CheckoutLineChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "line-chart",
      stroke: {
        curve: "smooth",
      },
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Hours of Sleep",
      data: [4.4, 3.5, 5.0, 4.2, 6.8, 8.1, 8.3],
    },
  ]);
  return (
    <div className="chart">
      <Chart options={options} series={series} type="line" />
      <style jsx>{`
        .chart {
          width: "100%";
          height: "100px";
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default CheckoutLineChart;
