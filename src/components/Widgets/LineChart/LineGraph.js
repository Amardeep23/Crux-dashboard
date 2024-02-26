import React from "react";
import "./LineGraph.css";
import threeDots from "../../../assets/image/three-dots.png";
import { LineChart } from "@mui/x-charts/LineChart";

const LineGraph = ({ color, size, content }) => {
  const accord_data = [
    {
      id: 1,
      title: "Christmas25",
      value: "5700",
    },
    {
      id: 2,
      title: "BirthdaySpecial25",
      value: "27,000",
    },
    {
      id: 3,
      title: "Newuser30",
      value: "12,500",
    },
    {
      id: 4,
      title: "Newuser30",
      value: "16,000",
    },
    {
      id: 5,
      title: "Newuser30",
      value: "17,000",
    },
    {
      id: 6,
      title: "Newuser30",
      value: "18,000",
    },
    {
      id: 7,
      title: "Newuser30",
      value: "19,000",
    },
    {
      id: 8,
      title: "Newuser30",
      value: "20,000",
    },
    {
      id: 9,
      title: "Newuser30",
      value: "21,000",
    },
    {
      id: 10,
      title: "Newuser30",
      value: "22,000",
    },
    {
      id: 11,
      title: "Newuser30",
      value: "23,000",
    },
    {
      id: 12,
      title: "Newuser30",
      value: "24,000",
    },
    {
      id: 13,
      title: "Newuser30",
      value: "25,000",
    },
    {
      id: 14,
      title: "Newuser30",
      value: "26,000",
    },
    {
      id: 15,
      title: "Newuser30",
      value: "27,000",
    },
    {
      id: 16,
      title: "Newuser30",
      value: "28,000",
    },
    {
      id: 17,
      title: "Newuser30",
      value: "29,000",
    },
    {
      id: 18,
      title: "Newuser30",
      value: "30,000",
    },
    {
      id: 19,
      title: "Newuser30",
      value: "31,000",
    },
    {
      id: 20,
      title: "Newuser30",
      value: "32,000",
    },
  ];
  const bCol = ["#F1E254", "#FF8E8E", "#96D3FF", "#5FDC8F", "#F182F3", "red"];

  return (
    <div className="LineChart" id={`Linechart-${color}`}>
      <div className="title" id={`LineChartTitle-${color}`}>
        <div className="threeOption-Pie">
          <span>7d</span>
          <span>14d</span>
          <span>30d</span>
        </div>
        {/* <img
          src={threeDots}
          width={10}
          className="Pie-threedots"
          alt="three dots"
        /> */}
      </div>
      {content && (
        <LineChart
          xAxis={content.xAxis}
          series={content.series}
          width={190}
          height={220}
          margin={{ top: 28, right: 28, bottom: 28, left: 28 }}
        />
      )}
      {color && (
        <div
          className="LineChart-Bottom"
          style={{
            height: size === "medH" ? 117 : 308,
            overflow: "auto",
            marginBottom: 15,
          }}
          id={`LineChart-Bottom-${color}`}
        >
          {accord_data.map((data, index) => {
            return (
              <div
                className={`LineChart-Bottom-Child`}
                style={{
                  borderLeft: `4px solid ${bCol[index % bCol.length]}`,
                }}
                key={index}
              >
                <span
                  style={{
                    color:
                      color === "black"
                        ? "#4f4f4f"
                        : color === "blue"
                        ? "rgba(255,255,255, 0.7)"
                        : "#4f4f4f",
                  }}
                >
                  {data.title}
                </span>
                <span
                  style={{
                    color:
                      color === "black"
                        ? "#fff"
                        : color === "blue"
                        ? "#fff"
                        : "#4f4f4f",
                    fontWeight: 400,
                    fontSize: 14,
                  }}
                >
                  {data.value}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LineGraph;
