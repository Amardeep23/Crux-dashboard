import React from "react";
import "./Pie.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const Pie = ({ color }) => {
  const size = {
    width: 190,
    height: 190,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 13,
    fontFamily: "Geist",
    fontWeight: 400,
    lineHeight: 18,
    fill:  color === 'black' ? '#fff' : color === 'blue' ? '#fff' : '#4f4f4f',
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2 + 47} y={top + height / 2 + 9}>
        {children}
      </StyledText>
    );
  }
  return (
    <div className="Pie" id={`Pie-${color}`}>
      <PieChart
        series={[
          {
            data,
            innerRadius: 65,
            cx: "105%",
            cy: "55%",
          },
        ]}
        {...size}
        slotProps={{
          legend: { hidden: true },
        }}
      >
        <PieCenterLabel>89,000 orders</PieCenterLabel>
      </PieChart>
    </div>
  );
};

export default Pie;
