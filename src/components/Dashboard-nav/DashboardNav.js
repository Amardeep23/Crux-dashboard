import React, { useState, useEffect } from "react";
import "./DashboardNav.css";
import HomeIcon from "../../assets/image/Home.svg";
import { Link } from "react-router-dom";
import Pagedata from "../../data/PageName";
import Add_page_icon from "../../assets/image/add_page_plus.png";
import Add_widget from "../../assets/image/Add_widget.png";
import settings from "../../assets/image/settings.png";
import AddPageModal from "../AddPageModal/AddPageModal";

const DashboardNav = ({ onSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Customers");
  const [pageNames, setPageNames] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("Pagedata") !== null) {
      setPageNames(JSON.parse(localStorage.getItem("Pagedata")));
    } else {
      localStorage.setItem("Pagedata", JSON.stringify(Pagedata));
      setPageNames(Pagedata);
    }
  }, [pageNames]);

  useEffect(() => {
    onSelect("Customers");
  }, []);

  const handleOptionClick = (item) => {
    setSelectedOption(item);
    onSelect(item);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onClosePage = (pageName) => {
    const updatedPageNames = pageNames.filter((item) => item.pageName !== pageName);
    setPageNames(updatedPageNames);
    localStorage.setItem("Pagedata", JSON.stringify(updatedPageNames));

    if (onSelect === pageName) {
      const updatedPageNames = JSON.parse(localStorage.getItem("Pagedata"));
      const newSelectedPage = updatedPageNames.length > 0 ? updatedPageNames[0].pageName : null;
      setSelectedOption(newSelectedPage);
      onSelect(newSelectedPage);
    }
  }

  const handleAddPage = (pageName) => {
    const newPageId = pageNames.length + 1;
    const newPage = { pageId: newPageId, pageName };
    const updatedPageNames = [...pageNames, newPage];
    setPageNames(updatedPageNames);
    localStorage.setItem("Pagedata", JSON.stringify(updatedPageNames));
  };

  return (
    <div className="DashboardNav">
      <div className="DashboardNav-child-left">
        <div className="DashboardNav-child-left-icon">
          <Link to="/">
            <img src={HomeIcon} alt="Home" />
          </Link>
        </div>
        <div className="DashboardNav-child-left-pages">
          {pageNames.map((item, index) => {
            return (
              <div key={index} className="temp">
                <div onClick={() => onClosePage(item.pageName)}>
                  <span className="close-page">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle-fill hover-red"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                  </span>
                  </div>
                  <button
                    className={`DashboardNav-child-left-pages-child-${
                      selectedOption === item.pageName ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick(item.pageName)}
                  >
                    {item.pageName}
                  </button>
              </div>
            );
          })}
        </div>
        <div className="DashboardNav-child-left-addPages">
          <button onClick={openModal}>
            <img src={Add_page_icon} width={31} alt="Add Page" />
          </button>
        </div>
      </div>
      <div className="DashboardNav-child-right">
        <button style={{ marginTop: "0.2rem" }}>
          <img src={Add_widget} width={115} alt="Add Widget" />
        </button>
        <button style={{ marginLeft: "0.7rem", marginTop: "0.2rem" }}>
          <img src={settings} width={17} alt="Settings" />
        </button>
      </div>
      {isModalOpen && (
        <AddPageModal onClose={closeModal} onSubmit={handleAddPage} />
      )}
    </div>
  );
};

export default DashboardNav;
