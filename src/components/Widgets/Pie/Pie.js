import React from "react";
import "./Pie.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import threeDots from "../../../assets/image/three-dots.png";
import Data from "../../../data/PieData";

const Pie = ({ content, color }) => {
  const size = {
    width: 190,
    height: 170,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 13,
    fontFamily: "Geist",
    fontWeight: 400,
    lineHeight: 18,
    fill: color === "black" ? "#fff" : color === "blue" ? "#fff" : "#4f4f4f",
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2 + 47} y={top + height / 2 + 6}>
        {children}
      </StyledText>
    );
  }
  return (
    <div className="Pie" id={`Pie-${color}`}>
      <div className="title" id={`PieTitle-${color}`}>
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
        <PieChart
          series={[
            {
              data: content.data,
              innerRadius: 55,
              cx: "105%",
              cy: "53%",
            },
          ]}
          colors={["#FF6969", "#F2E144", "pink", "#54D787"]}
          {...size}
          slotProps={{
            legend: { hidden: true },
          }}
        >
          <PieCenterLabel>89,000 orders</PieCenterLabel>
        </PieChart>
      )}
    </div>
  );
};

export default Pie;
