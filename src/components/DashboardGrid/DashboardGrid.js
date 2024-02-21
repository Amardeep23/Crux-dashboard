import React from 'react'
import './DashboardGrid.css'

const DashboardGrid = ({element}) => {
  return (
    <div className='DashboardGrid'>
        {element && <h2>{element}</h2>}
    </div>
  )
}

export default DashboardGrid