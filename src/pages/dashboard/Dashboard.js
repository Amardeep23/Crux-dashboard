import React , { useState } from 'react'
import './Dashboard.css'
import DashboardNav from '../../components/Dashboard-nav/DashboardNav'
import Sidenav from '../../components/Sidenav/Sidenav'
import DashboardGrid from '../../components/DashboardGrid/DashboardGrid'


const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className='dashboard'>
      <DashboardNav  onSelect={handleOptionSelect}/>
      <Sidenav />
      {/* <h1>Dashboard</h1>  */}
      {/* {selectedOption && <h2>{selectedOption}</h2>} */}
      <DashboardGrid element = {selectedOption} />
    </div>
  )
}

export default Dashboard