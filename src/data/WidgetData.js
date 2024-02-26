const WidgetData = {
  data: [
    {
      widgetType: "Textbox",
      size: "medW",
      color: "black",
      content: {
        text: "Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in ",
      },
    },
    {
      widgetType: "Textbox",
      size: "medW",
      color: "white",
      content: {
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    },
    {
      widgetType: "Textbox",
      size: "medW",
      color: "blue",
      content: {
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    },
    {
      widgetType: "Textbox",
      size: "medW",
      color: "white",
      content: {
        text: "Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement",
      },
    },
    {
      widgetType: "Textbox",
      size: "medW",
      color: "black",
      content: {
        text: "Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement",
      },
    },
    {
      widgetType: "Histogram",
      size: "smallWH",
      color: "black",
      content: {
        xAxis: [{ scaleType: "band", data: ["group A", "group B", "group C"] }],
        series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
      },
    },
    {
      widgetType: "Histogram",
      size: "smallWH",
      color: "blue",
      content: {
        xAxis: [{ scaleType: "band", data: ["group A", "group B", "group C"] }],
        series: [{ data: [9, 6, 5] }, { data: [1, 4, 3] }, { data: [7, 2, 6] }],
      },
    },
    {
      widgetType: "Histogram",
      size: "smallWH",
      color: "white",
      content: {
        xAxis: [{ scaleType: "band", data: ["group A", "group B", "group C"] }],
        series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
      },
    },
    {
      widgetType: "Histogram",
      size: "medH",
      color: "black",
      content: {
        xAxis: [{ scaleType: "band", data: ["group A", "group B", "group C"] }],
        series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
      },
    },
    {
      widgetType: "Histogram",
      size: "medH",
      color: "blue",
      content: {
        xAxis: [{ scaleType: "band", data: ["group A", "group B", "group C"] }],
        series: [{ data: [9, 6, 5] }, { data: [1, 4, 3] }, { data: [7, 2, 6] }],
      },
    },
    {
      widgetType: "Histogram",
      size: "medH",
      color: "white",
      content: {
        xAxis: [{ scaleType: "band", data: ["group A", "group B", "group C"] }],
        series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
      },
    },
    {
      widgetType: "LineGraph",
      size: "medH",
      color: "black",
      content: {
        xAxis: [{ data: [1, 2, 3, 4, 5, 8, 10] }],
        series: [
          {
            curve: "linear",
            data: [5, 2, 2, 4, 9, 8],
            color: "#FF8E8E",
          },
          {
            curve: "linear",
            data: [2, 5, 2, 8, 1, 5],
            color: "#5FDC8F",
          },
        ],
      },
    },
    {
      widgetType: "LineGraph",
      size: "medH",
      color: "blue",
      content: {
        xAxis: [{ data: [1, 2, 3, 4, 5, 8, 10] }],
        series: [
          {
            curve: "linear",
            data: [2, 5, 2, 8, 1, 5],
            color: "#FF8E8E",
          },
          {
            curve: "linear",
            data: [5, 2, 2, 4, 9, 8],
            color: "#5FDC8F",
          },
        ],
      },
    },
    {
      widgetType: "LineGraph",
      size: "medH",
      color: "white",
      content: {
        xAxis: [{ data: [1, 2, 3, 4, 5, 8, 10] }],
        series: [
          {
            curve: "linear",
            data: [2, 5, 2, 0, 1, 5],
            color: "#FF8E8E",
          },
          {
            curve: "linear",
            data: [5, 0, 2, 4, 9, 8],
            color: "#5FDC8F",
          },
        ],
      },
    },
    {
      widgetType: "LineGraph",
      size: "longH",
      color: "black",
      content: {
        xAxis: [{ data: [1, 2, 3, 4, 5, 8, 10] }],
        series: [
          {
            curve: "linear",
            data: [2, 5, 2, 8, 1, 5],
            // color: "#FF8E8E",
          },
          {
            curve: "linear",
            data: [5, 2, 2, 4, 9, 8],
            // color: "#5FDC8F",
          },
        ],
      },
    },
    {
      widgetType: "LineGraph",
      size: "longH",
      color: "blue",
      content: {
        xAxis: [{ data: [1, 2, 3, 4, 5, 8, 10] }],
        series: [
          {
            curve: "linear",
            data: [2, 5, 2, 8, 1, 5],
            color: "#FF8E8E",
          },
          {
            curve: "linear",
            data: [5, 2, 2, 4, 9, 8],
            color: "#5FDC8F",
          },
        ],
      },
    },
    {
      widgetType: "LineGraph",
      size: "longH",
      color: "white",
      content: {
        xAxis: [{ data: [1, 2, 3, 4, 5, 8, 10] }],
        series: [
          {
            curve: "linear",
            data: [2, 5, 2, 8, 1, 5],
            color: "#FF8E8E",
          },
          {
            curve: "linear",
            data: [5, 2, 2, 4, 9, 8],
            color: "#5FDC8F",
          },
        ],
      },
    },
    {
      widgetType: "Pie",
      size: "smallWH",
      color: "black",
      content: {
        data: [
          { value: 5, label: "A" },
          { value: 100, label: "B" },
          { value: 10, label: "C" },
          { value: 20, label: "D" },
        ],
      },
    },
    {
      widgetType: "Pie",
      size: "smallWH",
      color: "blue",
      content: {
        data: [
          { value: 5, label: "A" },
          { value: 10, label: "B" },
          { value: 15, label: "C" },
          { value: 20, label: "D" },
        ],
      },
    },
    {
      widgetType: "Pie",
      size: "smallWH",
      color: "white",
      content: {
        data: [
          { value: 5, label: "A" },
          { value: 10, label: "B" },
          { value: 15, label: "C" },
          { value: 30, label: "D" },
        ],
      },
    },
    {
      widgetType: "Table",
      size: "smallWH",
      color: "blue",
      content: {
        columns: [
          {
            title: "Product",
            dataIndex: "Product",
            key: "Product",
          },
          {
            title: "Q1_23",
            dataIndex: "Q1_23",
            key: "Q1_23",
          },
          {
            title: "Q2_23",
            dataIndex: "Q2_23",
            key: "Q2_23",
          },
        ],
        data: [
          {
            key: "1",
            Product: "EcoEnergy",
            Q1_23: 32,
            Q2_23: 10,
          },
          {
            key: "2",
            Product: "GreenPack",
            Q1_23: 33,
            Q2_23: 11,
          },
          {
            key: "3",
            Product: "EcoTrans",
            Q1_23: 34,
            Q2_23: 12,
          },
          {
            key: "4",
            Product: "Recycle",
            Q1_23: 35,
            Q2_23: 13,
          },
          {
            key: "5",
            Product: "GreenClean",
            Q1_23: 36,
            Q2_23: 14,
          },
          {
            key: "6",
            Product: "WaterSolv",
            Q1_23: 37,
            Q2_23: 15,
          },
          {
            key: "7",
            Product: "EcoBuild",
            Q1_23: 38,
            Q2_23: 16,
          },
          {
            key: "8",
            Product: "CarbonOff",
            Q1_23: 39,
            Q2_23: 17,
          },
          {
            key: "9",
            Product: "OrganicWM",
            Q1_23: 40,
            Q2_23: 18,
          },
          {
            key: "10",
            Product: "EnergyEff",
            Q1_23: 41,
            Q2_23: 19,
          },
          {
            key: "11",
            Product: "RenewMat",
            Q1_23: 42,
            Q2_23: 20,
          },
          {
            key: "12",
            Product: "CircEco",
            Q1_23: 43,
            Q2_23: 21,
          },
          {
            key: "13",
            Product: "LowCarb",
            Q1_23: 44,
            Q2_23: 22,
          },
          {
            key: "14",
            Product: "WaterCons",
            Q1_23: 45,
            Q2_23: 23,
          },
          {
            key: "15",
            Product: "RenewAud",
            Q1_23: 46,
            Q2_23: 24,
          },
        ],
      },
    },
    {
      widgetType: "Table",
      size: "smallWH",
      color: "black",
      content: {
        columns: [
          {
            title: "Product",
            dataIndex: "Product",
            key: "Product",
          },
          {
            title: "Q1_23",
            dataIndex: "Q1_23",
            key: "Q1_23",
          },
          {
            title: "Q2_23",
            dataIndex: "Q2_23",
            key: "Q2_23",
          },
        ],
        data: [
          {
            key: "1",
            Product: "EcoEnergy",
            Q1_23: 32,
            Q2_23: 10,
          },
          {
            key: "2",
            Product: "GreenPack",
            Q1_23: 33,
            Q2_23: 11,
          },
          {
            key: "3",
            Product: "EcoTrans",
            Q1_23: 34,
            Q2_23: 12,
          },
          {
            key: "4",
            Product: "Recycle",
            Q1_23: 35,
            Q2_23: 13,
          },
          {
            key: "5",
            Product: "GreenClean",
            Q1_23: 36,
            Q2_23: 14,
          },
          {
            key: "6",
            Product: "WaterSolv",
            Q1_23: 37,
            Q2_23: 15,
          },
          {
            key: "7",
            Product: "EcoBuild",
            Q1_23: 38,
            Q2_23: 16,
          },
          {
            key: "8",
            Product: "CarbonOff",
            Q1_23: 39,
            Q2_23: 17,
          },
          {
            key: "9",
            Product: "OrganicWM",
            Q1_23: 40,
            Q2_23: 18,
          },
          {
            key: "10",
            Product: "EnergyEff",
            Q1_23: 41,
            Q2_23: 19,
          },
          {
            key: "11",
            Product: "RenewMat",
            Q1_23: 42,
            Q2_23: 20,
          },
          {
            key: "12",
            Product: "CircEco",
            Q1_23: 43,
            Q2_23: 21,
          },
          {
            key: "13",
            Product: "LowCarb",
            Q1_23: 44,
            Q2_23: 22,
          },
          {
            key: "14",
            Product: "WaterCons",
            Q1_23: 45,
            Q2_23: 23,
          },
          {
            key: "15",
            Product: "RenewAud",
            Q1_23: 46,
            Q2_23: 24,
          },
        ],
      },
    },
    {
      widgetType: "Table",
      size: "smallWH",
      color: "white",
      content: {
        columns: [
          {
            title: "Product",
            dataIndex: "Product",
            key: "Product",
          },
          {
            title: "Q1_23",
            dataIndex: "Q1_23",
            key: "Q1_23",
          },
          {
            title: "Q2_23",
            dataIndex: "Q2_23",
            key: "Q2_23",
          },
        ],
        data: [
          {
            key: "1",
            Product: "EcoEnergy",
            Q1_23: 32,
            Q2_23: 10,
          },
          {
            key: "2",
            Product: "GreenPack",
            Q1_23: 33,
            Q2_23: 11,
          },
          {
            key: "3",
            Product: "EcoTrans",
            Q1_23: 34,
            Q2_23: 12,
          },
          {
            key: "4",
            Product: "Recycle",
            Q1_23: 35,
            Q2_23: 13,
          },
          {
            key: "5",
            Product: "GreenClean",
            Q1_23: 36,
            Q2_23: 14,
          },
          {
            key: "6",
            Product: "WaterSolv",
            Q1_23: 37,
            Q2_23: 15,
          },
          {
            key: "7",
            Product: "EcoBuild",
            Q1_23: 38,
            Q2_23: 16,
          },
          {
            key: "8",
            Product: "CarbonOff",
            Q1_23: 39,
            Q2_23: 17,
          },
          {
            key: "9",
            Product: "OrganicWM",
            Q1_23: 40,
            Q2_23: 18,
          },
          {
            key: "10",
            Product: "EnergyEff",
            Q1_23: 41,
            Q2_23: 19,
          },
          {
            key: "11",
            Product: "RenewMat",
            Q1_23: 42,
            Q2_23: 20,
          },
          {
            key: "12",
            Product: "CircEco",
            Q1_23: 43,
            Q2_23: 21,
          },
          {
            key: "13",
            Product: "LowCarb",
            Q1_23: 44,
            Q2_23: 22,
          },
          {
            key: "14",
            Product: "WaterCons",
            Q1_23: 45,
            Q2_23: 23,
          },
          {
            key: "15",
            Product: "RenewAud",
            Q1_23: 46,
            Q2_23: 24,
          },
        ],
      },
    },
  ],
};

export default WidgetData;
