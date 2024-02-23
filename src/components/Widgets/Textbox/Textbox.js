import {React, useEffect, useState} from "react";
import "./Textbox.css";
import { Card } from "antd";
import dropdown from "../../../assets/image/dropdown.png";
import three_dots from "../../../assets/image/three-dots.png";

const Textbox = () => {
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
            <img src={dropdown} width={12} style={{
              marginRight: "18vw",
              transform: "translateY(0rem)"
            
            }} alt="dropdown" />
            <img src={three_dots} width={12} alt="three_dots" />
          </>
        }
        bordered={false}
        style={{
          width: '28.4vw',
          height: '30vh',
          padding: "0.1rem",
        }}
      >
        <p style={{ margin: 0 }}>
          Card content Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Veritatis numquam odit odio blanditiis cum, debitis, nulla ut at
          reiciendis temporibus molestiae assumenda sint error nesciunt soluta!
          Aspernatur voluptatem quod iusto!
        </p>
      </Card>
    </div>
  );
};

export default Textbox;
