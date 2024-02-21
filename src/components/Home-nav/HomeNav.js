import React from "react";
import "./HomeNav.css";
import crux from "../../assets/image/Crux-icon.png";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <>
      <div className="HomeNav">
        <nav>
          <div className="HomeNav-logo">
            <Link to="/">
              <img src={crux} alt="Crux" />
            </Link>
            <Link to="/">
              <p>crux</p>
            </Link>
          </div>
          <div className="HomeNav-center">
            <a href="https://www.getcrux.ai/#Features" target="blank">
              Features
            </a>
            <a href="https://www.getcrux.ai/blogs" target="blank">
              Blogs
            </a>
            <a
              href="https://getcruxai.notion.site/getcruxai/Founding-Full-Stack-AI-Engineer-CRUX-ade51088a2ab48afb76d8aa68bf68a20"
              target="blank"
            >
              Careers
            </a>
          </div>
          <div className="HomeNav-rightBtn">
            <a href="/dashboard">
              <button>Dashboard</button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HomeNav;
