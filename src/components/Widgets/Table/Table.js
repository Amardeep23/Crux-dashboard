import { React, useState, useEffect } from "react";
import "./Table.css";
import { Space, Table, Tag, ConfigProvider } from "antd";
import TableData from "../../../data/TableData";
import styled from 'styled-components';


const themes = {
    white: {
        components: {
            Pagination: {
                fontSize: "11px",
                lineHeight: "18px",
                weight: "400",
                size: "small",
                margin: "3px",
                padding: "3px",
                itemBg: "#fff",
                itemColor: "#5E5ADB",
                itemDisabledBg: "#fff",
                itemDisabledColor: "#fff",
                itemHoverBg: "#fff",
                itemHoverColor: "#5E5ADB",
                itemActiveBg: "#fff",
                itemActiveColorDisabled: "#fff",
            },
            Table: {
                stickyScrollBarBorderRadius: "100px",
                headerSplitColor: "#E1E1E1",
                headerColor: "#5E5ADB",
                headerBg:"#fff",
                footerColor: "#5E5ADB",
                footerBg:"#fff",
                cellPaddingInline: "7px",
                cellPaddingBlock: "0px",
                cellFontSize: "11px",
                borderColor: "rgba(0, 0, 0, 0.0)",
            },
        },
        token: {
            fontFamily: "Inter",
            fontSize: "11px",
            lineHeight: "18px",
            weight: "400",
            size: "small",
            margin: "3px",
            padding: "3px",
        }
    },
    blue: {
        components: {
            Pagination: {
                fontSize: "11px",
                lineHeight: "18px",
                weight: "400",
                size: "small",
                margin: "3px",
                padding: "3px",
                itemBg: "#5E5ADB",
                itemColor: "#fff",
                itemDisabledBg: "#5E5ADB",
                itemDisabledColor: "#fff",
                itemHoverBg: "#5E5ADB",
                itemHoverColor: "#fff",
                itemActiveBg: "#5E5ADB",
                itemActiveColorDisabled: "#fff",
            },
            Table: {
                stickyScrollBarBorderRadius: "100px",
                headerSplitColor: "#E1E1E1",
                headerColor: "#fff",
                headerBg:"#5E5ADB",
                footerColor: "#fff",
                footerBg:"#5E5ADB",
                cellPaddingInline: "7px",
                cellPaddingBlock: "0px",
                cellFontSize: "11px",
                borderColor: "rgba(0, 0, 0, 0.0)",
            },
        },
        token: {
            fontFamily: "Inter",
            fontSize: "11px",
            lineHeight: "18px",
            weight: "400",
            size: "small",
            margin: "3px",
            padding: "3px",
        }
    },
    black: {
        components: {
            Pagination: {
                fontSize: "11px",
                lineHeight: "18px",
                weight: "400",
                size: "small",
                margin: "3px",
                padding: "3px",
                itemBg: "#282828",
                itemColor: "#fff",
                itemDisabledBg: "#282828",
                itemDisabledColor: "#fff",
                itemHoverBg: "#282828",
                itemHoverColor: "#fff",
                itemActiveBg: "#282828",
                itemActiveColorDisabled: "#fff",
            },
            Table: {
                stickyScrollBarBorderRadius: "100px",
                headerSplitColor: "#E1E1E1",
                headerColor: "#fff",
                headerBg:"#282828",
                footerColor: "#fff",
                footerBg:"#282828",
                cellPaddingInline: "7px",
                cellPaddingBlock: "0px",
                cellFontSize: "11px",
                borderColor: "rgba(0, 0, 0, 0.0)",
            },
        },
        token: {
            fontFamily: "Inter",
            fontSize: "11px",
            lineHeight: "18px",
            weight: "400",
            size: "small",
            margin: "3px",
            padding: "3px",
        }
    },
}







const TableGrid = ({color}) => {
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [avgQ1, setAvgQ1] = useState(0);
  const [avgQ2, setAvgQ2] = useState(0);

  useEffect(() => {
    setColumns(TableData.columns);
    setData(TableData.data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    let sumQ1 = 0;
    let sumQ2 = 0;
    TableData.data.forEach((element) => {
      sumQ1 += element.Q1_23;
      sumQ2 += element.Q2_23;
    });
    setAvgQ1(sumQ1 / TableData.data.length);
    setAvgQ2(sumQ2 / TableData.data.length);
  }, []);

  return (
    <div className="Table">
      <ConfigProvider
    theme={{
        ...themes[color]
    }}
  >
      <Table loading={loading}
      id={`table-${color}`}
        scroll={{ y: '20.5vh' }}
        pagination={{
            position: ['topCenter'],
            defaultPageSize: 7,
            pageSize: 7,
            responsive: true,
            size: "small",
            margin: "1px",
            padding: "1px",
          }}
          footer={() => {
            <div>
              <p>Average Q1_23: {avgQ1}</p>
              <p>Average Q2_23: {avgQ2}</p>
            </div>
          }
        }
      columns={columns} dataSource={data} />
     </ConfigProvider>
    </div>
  );
};

export default TableGrid;
