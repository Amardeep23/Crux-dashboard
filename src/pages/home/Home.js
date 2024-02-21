import React from "react";
import "./Home.css";
import HomeNav from "../../components/Home-nav/HomeNav";

const Home = () => {
  return (
    <div className="home">
      <HomeNav />
      <div className="home-center">
        <div className="home-center-child-1">
          Build your Decision-Making AI Copilot Faster than ever
        </div>
        <div className="home-center-child-2">
          Delight your enterprise accounts with instant answers & insights from
          their business data
        </div>
        <div className="home-center-child-3">
          <a href="/dashboard">
            <button>Dashboard</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
