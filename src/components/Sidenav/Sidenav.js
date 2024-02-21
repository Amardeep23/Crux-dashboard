import React from 'react'
import './Sidenav.css';
import Crux_icon from '../../assets/image/Crux-icon.png';
import side_nav_btn_1 from '../../assets/image/side-nav-btn-1.png';
import side_nav_btn_2 from '../../assets/image/side-nav-btn-2.png';
import side_nav_btn_3 from '../../assets/image/side-nav-btn-3.png';
import side_nav_btn_4 from '../../assets/image/side-nav-btn-4.png';
import profile_photo from '../../assets/image/Avatar.png';





const Sidenav = () => {
  return (
    <div className='Sidenav'>
        <div className="Sidenav-top">
            <img src={Crux_icon} width={25} alt="Crux Icon" />
            <img src={side_nav_btn_1} width={30} alt="side_nav_btn_1" />
            <img src={side_nav_btn_2} width={30} alt="side_nav_btn_2" />
            <img src={side_nav_btn_3} width={30} alt="side_nav_btn_3" />
            <img src={side_nav_btn_4} width={30} alt="side_nav_btn_4" />
        </div>
        <div className="Sidenav-bottom">
            <img src={profile_photo} width={33} alt="Profile Photo" />
        </div>
    </div>
  )
}

export default Sidenav