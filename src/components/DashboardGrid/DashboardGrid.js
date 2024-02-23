import React from "react";
import "./DashboardGrid.css";
import Histogram from "../Widgets/Histogram/Histogram";
import Pie from "../Widgets/Pie/Pie";
import Textbox from "../Widgets/Textbox/Textbox";
import Table from "../Widgets/Table/Table";


const DashboardGrid = ({ element }) => {
  return (
    <div className="DashboardGrid">
      <div className="DashboardGrid-inner">
        <div className="pie-smallWH"><Pie color={"blue"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW">
          <Textbox />
        </div>
        <div className="table-smallWH"> <Table color = {"white"} /></div>
        <div className="pie-smallWH"><Pie color={"black"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className="table-smallWH"><Table color = {"blue"}/></div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="pie-smallWH"><Pie color={"white"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="pie-smallWH"><Pie color={"blue"}/></div>
        <div className="table-smallWH"> <Table color = {"black"} /></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="table-smallWH"><Table color = {"black"}/></div>
        <div className="pie-smallWH"><Pie color={"black"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="table-smallWH"> <Table color = {"blue"}/></div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="table-smallWH"><Table color = {"black"}/></div>
        <div className="pie-smallWH"><Pie color={"white"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="table-smallWH"><Table color = {"white"}/></div>
        <div className="pie-smallWH"><Pie color={"blue"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="pie-smallWH"><Pie color={"black"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="pie-smallWH"><Pie color={"white"}/></div>
        <div className = "line-medH">Line Chart-medH</div>
        <div className="line-longH">Line Chart-longH</div>
        <div className = "hist-smallWH">Histogram Small</div>
        <div className="hist-medH">Histogram medH</div>
        <div className="text-medW"><Textbox /></div>
        <div className="table-smallWH"> <Table  color = {"blue"}/></div>
      </div>
    </div>
  );
};

export default DashboardGrid;
