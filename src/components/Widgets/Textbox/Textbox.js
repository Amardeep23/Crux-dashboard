import {React, useEffect, useState} from "react";
import "./Textbox.css";
import { Card } from "antd";
import dropdown from "../../../assets/image/dropdown.png";
import three_dots from "../../../assets/image/three-dots.png";

const Textbox = ({size, color, text}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="Textbox">
      <Card
        title="Today"
        loading={loading}
        extra={
          <>
            <img src={three_dots} width={12} alt="three_dots" />
          </>
        }
        bordered={false}
        style={{
          width: 400,
          height: 182,
          padding: "0.1rem",
        }}
      >
        <p style={{ margin: 0 }}>
          {text}
        </p>
      </Card>
    </div>
  );
};

export default Textbox;
