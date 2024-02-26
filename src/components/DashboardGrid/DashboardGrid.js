import {React, useState , useEffect} from "react";
import "./DashboardGrid.css";
import Histogram from "../Widgets/Histogram/Histogram";
import Pie from "../Widgets/Pie/Pie";
import Textbox from "../Widgets/Textbox/Textbox";
import Table from "../Widgets/Table/Table";
import LineGraph from "../Widgets/LineChart/LineGraph";
import TextBoxData from "../../data/TextBox"
import WidgetData from "../../data/WidgetData"

const DashboardGrid = ({ element }) => {
  const [textBoxDatas, setTextBoxDatas] = useState([]);
  const [widgetDatas, setWidgetDatas] = useState([]);
  
  useEffect(() => {
    if(localStorage.getItem("widgetData") !== null){
      setWidgetDatas(JSON.parse(localStorage.getItem("widgetData")))
    }else{
      localStorage.setItem("widgetData", JSON.stringify(WidgetData))
      setWidgetDatas(WidgetData)
    }
  }, [])  

  function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

  return (
    <div className="DashboardGrid">
      <div className="DashboardGrid-inner">

        {
          widgetDatas['data'] && shuffleArray([...widgetDatas['data']]).map((item, index) => {
            switch(item.widgetType){
              case "Textbox":
                if(item.size === "medW"){
                  return <div key={index} className="text-medW"><Textbox size={item.size} color={item.color} text={item.content.text}/></div>
                }
              case "Histogram":
                if(item.size === "smallWH"){
                  return <div key={index} className="hist-smallWH"><Histogram content={item.content} color={item.color} size={item.size}/></div>
                } else if(item.size === "medH"){
                  return <div key={index} className="hist-medH"><Histogram content={item.content} color={item.color} size={item.size}/></div>
                } 
              case "LineGraph":
                if(item.size === "medH"){
                  return <div key={index} className="line-medH"><LineGraph content={item.content} color={item.color} size={item.size}/></div>
                } else if(item.size === "longH"){
                  return <div key={index} className="line-longH"><LineGraph content={item.content} color={item.color} size={item.size}/></div>
                }
              case "Pie":
                if(item.size === "smallWH"){
                  return <div key={index} className="pie-smallWH"><Pie content={item.content} color={item.color}/></div>
                }
              case "Table":
                if(item.size === "smallWH"){
                  return <div key={index} className="table-smallWH"><Table content={item.content} color={item.color}/></div>
                }
            }
          })
        }
      </div>
    </div>
  );
};

export default DashboardGrid;
