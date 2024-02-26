import React from "react";
import "./Histogram.css";
import { BarChart } from "@mui/x-charts/BarChart";
import threeDots from "../../../assets/image/three-dots.png";
import data from "../../../data/HistogramData";

const Histogram = ({ color, size, content }) => {
  return (
    <div className="Histogram" id={`Histogram-${color}`}>
      <div className="title" id={`HistogramTitle-${color}`}>
        <div className="threeOption-Pie">
          <span>7d</span>
          <span>14d</span>
          <span>30d</span>
        </div>
        {/* <img
          src={threeDots}
          width={15}
          className="Pie-threedots"
          height={4}
          alt="three dots"
        /> */}
      </div>
      {content && (
        <BarChart
          xAxis={content.xAxis}
          series={content.series}
          width={190}
          height={size === "medH" ? 368 : 170}
          margin={{ top: 28, right: 28, bottom: 28, left: 28 }}
          slotProps={{
            legend: { hidden: true },
          }}
          colors={["#FF6969", "#F2E144", "pink", "#54D787"]}
        />
      )}
    </div>
  );
};

export default Histogram;
