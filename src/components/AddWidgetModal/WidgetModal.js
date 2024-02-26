import React, { useState, useEffect, useMemo } from "react";
import "./WidgetModal.css";
import "./WidgetModal.css";
import { render } from "@testing-library/react";
import ModalHeaderIcon from '../../assets/image/modal-header-icon.svg'
import { Segmented, Button, Input } from "antd"; 

const WidgetModal = ({ onClose, onSubmit }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetType, setWidgetType] = useState("Table");
  const [widgetSize, setWidgetSize] = useState("");
  const [widgetColor, setWidgetColor] = useState("white");
  const [chartType, setChartType] = useState("Pie");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(widgetName, widgetType, widgetSize, widgetColor);
    setWidgetName("");
    setWidgetType("");
    setWidgetSize("");
    setWidgetColor("");
    onClose();
  };

  const renderSizeOptions = useMemo(() => { switch (widgetType) {
    case "Textbox":
      return (
        <>
          <input
            type="radio"
            value="medW"
            checked={widgetSize === "medW"}
            onChange={(e) => setWidgetSize(e.target.value)}
          />
          Medium-Width
        </>
      );
    case "Histogram":
      return (
        <>
          <input
            type="radio"
            value="smallWH"
            checked={widgetSize === "smallWH"}
            onChange={(e) => setWidgetSize(e.target.value)}
          />
          Small-Width-Height
          <input
            type="radio"
            value="medH"
            checked={widgetSize === "medH"}
            onChange={(e) => setWidgetSize(e.target.value)}
          />
          Medium-Height
        </>
      );
    case "LineGraph":
      return (
        <>
          <input
            type="radio"
            value="medH"
            checked={widgetSize === "medH"}
            onChange={(e) => setWidgetSize(e.target.value)}
          />
          Medium-Height
          <input
            type="radio"
            value="longH"
            checked={widgetSize === "longH"}
            onChange={(e) => setWidgetSize(e.target.value)}
          />
          Long-Height
        </>
      );
    case "Pie":
      return (
          <>
              <input 
                  type="radio"
                  value="smallWH"
                  checked={widgetSize === "smallWH"}
                  onChange={(e) => setWidgetSize(e.target.value)}
              />
              Small-Width-Height
          </>
      );
    case "Table":
      return (
        <>
          <input
            type="radio"
            value="smallWH"
            checked={widgetSize === "smallWH"}
            onChange={(e) => setWidgetSize(e.target.value)}
          />
          Small-Width-Height
        </>
      );
    default:
      return null;
  }}, [widgetType]);
//   const renderSizeOptions = () => {
//     switch (widgetType) {
//       case "Textbox":
//         return (
//           <>
//             <input
//               type="radio"
//               value="medW"
//               checked={widgetSize === "medW"}
//               onChange={(e) => setWidgetSize(e.target.value)}
//             />
//             Medium-Width
//           </>
//         );
//       case "Histogram":
//         return (
//           <>
//             <input
//               type="radio"
//               value="smallWH"
//               checked={widgetSize === "smallWH"}
//               onChange={(e) => setWidgetSize(e.target.value)}
//             />
//             Small-Width-Height
//             <input
//               type="radio"
//               value="medH"
//               checked={widgetSize === "medH"}
//               onChange={(e) => setWidgetSize(e.target.value)}
//             />
//             Medium-Height
//           </>
//         );
//       case "LineGraph":
//         return (
//           <>
//             <input
//               type="radio"
//               value="medH"
//               checked={widgetSize === "medH"}
//               onChange={(e) => setWidgetSize(e.target.value)}
//             />
//             Medium-Height
//             <input
//               type="radio"
//               value="longH"
//               checked={widgetSize === "longH"}
//               onChange={(e) => setWidgetSize(e.target.value)}
//             />
//             Long-Height
//           </>
//         );
//       case "Pie":
//         return (
//             <>
//                 <input 
//                     type="radio"
//                     value="smallWH"
//                     checked={widgetSize === "smallWH"}
//                     onChange={(e) => setWidgetSize(e.target.value)}
//                 />
//                 Small-Width-Height
//             </>
//         );
//       case "Table":
//         return (
//           <>
//             <input
//               type="radio"
//               value="smallWH"
//               checked={widgetSize === "smallWH"}
//               onChange={(e) => setWidgetSize(e.target.value)}
//             />
//             Small-Width-Height
//           </>
//         );
//       default:
//         return null;
//     }
//   };

  const handleColorChange = (e) => {
    setWidgetColor(e);
  };

  return (
    <>
      <div className="modal">
        <div className="bg-white  h-[70vh] w-[70vw] rounded-2xl relative py-10 px-4 flex flex-col">

        <span role="button" className="absolute top-[0%] right-[1%] text-3xl" onClick={onClose}>
          &times;
        </span>
        {/* <div className="flex flex-col"> */}
        <div className="border text-xl flex justify-between items-start p-2 basis-1/12">
            <div className="flex">
                <div>
                    <img src={ModalHeaderIcon} alt="modal icon"/>
                </div>
                <div className="flex flex-col px-4">
                    <div className="text-[#5E5ADB] font-semibold flex">Create Widget</div>
                    <div className="text-[#888891] text-sm font-light">Manage the glossary of terms of your Database</div>
                </div>
            </div>
            <div className="">
                <Input placeholder="Type Widget Name" className="w-60 h-10" onChange={setWidgetName} allowClear/>
            </div>
        </div>
        <div className="border flex basis-11/12">
            <div className="basis-7/12 border flex flex-col justify-around">
                <div>
                    {renderSizeOptions}
                    {/* <renderSizeOptions /> */}
                </div>
                <div className="flex mx-auto gap-4">
                    <Button onClick={()=>{handleColorChange("black")}} className={`${widgetColor==="black"?"outline-4 outline-offset-4 outline outline-[#D3D2F5]":""} w-36 h-24 bg-[#282828] border-black`}></Button>
                    <Button onClick={()=>{handleColorChange("white")}} className={`${widgetColor==="white"?"outline-4 outline-offset-4 outline outline-[#D3D2F5]":""} w-36 h-24 bg-[#FFFFFF] border-black`}></Button>
                    <Button onClick={()=>{handleColorChange("blue")}} className={`${widgetColor==="blue"?"outline-4 outline-offset-4 outline outline-[#D3D2F5]":""} w-36 h-24 bg-[#5E5ADB] border-black`}></Button>
                    {/* <Button onClick={()=>setWidgetColor("white")} className={`${widgetColor==="white"?"outline-4 outline-offset-4 outline outline-[#D3D2F5]":""} w-36 h-24 bg-[#FFFFFF] border-black`}></Button> */}
                    {/* <Button onClick={()=>setWidgetColor("blue")} className={`${widgetColor==="blue"?"outline-4 outline-offset-4 outline outline-[#D3D2F5]":""} w-36 h-24 bg-[#5E5ADB] border-black`}></Button> */}
                </div>
            </div>
            <div className="basis-5/12 border flex flex-col justify-between">
                <div className="flex flex-col px-4 gap-4">
                    <div className="flex text-[#2B2B2B59]">Components</div>
                    <div role="button" onClick={() => setWidgetType("Table")} className={` ${(widgetType === "Table") ? "border-[#5E5ADB]" : ""} p-2 rounded-lg border flex flex-col items-start`}>
                        <div>Data</div>
                        <div>Random Description</div>
                    </div>
                    <div role="button" onClick={()=>setWidgetType(chartType)} className={` ${widgetType===("Pie"||"Histogram"||"LineGraph")?"border-[#5E5ADB]":""} p-2 rounded-lg border flex flex-col items-start`}>
                        <div>Graph</div>
                        <div>Random Description</div>
                        <div><Segmented options={['Histogram','Pie','LineGraph']} value={chartType} onChange={setChartType} /></div>
                    </div>
                    <div role="button" onClick={()=>setWidgetType("Textbox")} className={` ${widgetType==="Textbox"?"border-[#5E5ADB]":""} p-2 rounded-lg border flex flex-col items-start`}>
                        <div>Summary</div>
                        <div>Random Description</div>
                    </div>
                </div>
                <div className="flex px-4 gap-2 mx-auto">
                    <Button className="w-20" onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit} className="w-28 bg-[#5E5ADB] text-white p-4 flex items-center justify-center">Save</Button>
                </div>
            </div>
        </div>
          {/* <form onSubmit={handleSubmit}>
            <label>
            Widget Name:
            <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            />
            </label>
            <label>
            Widget Type:
            <input
            type="radio"
            value="Textbox"
            checked={widgetType === "Textbox"}
            onChange={(e) => setWidgetType(e.target.value)}
            />
            Textbox
            <input
            type="radio"
            value="Histogram"
            checked={widgetType === "Histogram"}
            onChange={(e) => setWidgetType(e.target.value)}
            />
            Histogram
            <input
            type="radio"
            value="LineGraph"
            checked={widgetType === "LineGraph"}
            onChange={(e) => setWidgetType(e.target.value)}
            />
            LiineGraph
            <input
            type="radio"
            value="Pie"
                checked={widgetType === "Pie"}
                onChange={(e) => setWidgetType(e.target.value)}
              />
              Pie
              <input
                type="radio"
                value="Table"
                checked={widgetType === "Table"}
                onChange={(e) => setWidgetType(e.target.value)}
                />
                Table
            </label>
            <label>
            Widget Size:
            {renderSizeOptions()}
            </label>
            <label>
            Widget Color:
            <input
            type="radio"
            value="blue"
            checked={widgetColor === "blue"}
            onChange={(e) => setWidgetColor(e.target.value)}
            />
            Blue
            <input
            type="radio"
            value="black"
            checked={widgetColor === "black"}
            onChange={(e) => setWidgetColor(e.target.value)}
            />
            Black
            <input
            type="radio"
            value="white"
            checked={widgetColor === "white"}
            onChange={(e) => setWidgetColor(e.target.value)}
            />
            White
            
            </label>    
            <button className="widgetModal-btn" type="submit">
            Submit
            </button>
        </form> */}
        {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default WidgetModal;
