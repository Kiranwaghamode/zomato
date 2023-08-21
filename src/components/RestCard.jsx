import React from 'react'
import '../css/restCard.css'
// import {restraunts} from '../data/restraunts'


export const RestCard = ({resName, imgUrl, cuisine, rating, price, dTime}) => {

  
  

  return (
    <div className='card'>
        <img src={imgUrl} alt="" />
        
        <div className="title2">
        <h3>{resName}</h3>
        <span>{rating} <i className="fa-solid fa-star"></i></span>
        </div>
        <div className="overview">
        <p>{cuisine}</p>
        <p>  {price}</p>
        </div>
        <p className='dTime'>{dTime}</p>
    </div>
  )
}
