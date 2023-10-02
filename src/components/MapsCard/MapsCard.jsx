import React from 'react'
import { Link } from 'react-router-dom'
import "./MapsCard.css"
import { Loading } from '../Loading/Loading'

export const MapsCard = ({infoMaps}) => {
  return (
    <div className='container-card'>
    {infoMaps.length === 0 ?
      <Loading/> :
    infoMaps.map((item) => (
        <div key={item.uuid} className='subcontainer-card'>
        <img src={item.splash} alt="" />
        <h2>{item.displayName}</h2>
        
      </div>
    ))}
</div>
  )
}
