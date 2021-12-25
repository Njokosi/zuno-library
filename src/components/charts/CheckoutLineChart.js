import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CheckoutLineChart = ({categories, data}) => {
    
  const [options, setOptions] = useState({
    chart: {
      id: "line-chart",
      stroke: {
        curve: "smooth",
      },
    },
    xaxis: {
      categories: categories,
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Number of Checkouts",
      data: data,
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
