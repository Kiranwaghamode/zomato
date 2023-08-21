import React, { useState, useEffect } from 'react'
import { RestCard } from './RestCard'
import '../css/explore.css'
import { useParams } from 'react-router-dom'


export const Explore = ({ restName, restrauntList }) => {

  // const [real_restrauntList, setreal_restrauntList] = useState(restrauntList)

















return (
  <>
    <div className="heading">{restName} </div>
    <div className="cards">

      {restrauntList.map((restraunt) => {

        return <RestCard
          key={restraunt?.info?.image?.url}

          resName={restraunt.info.name}
          imgUrl={restraunt?.info?.image?.url}
          cuisine={restraunt?.info?.cuisine.map((item) => item.name).slice(0, 3)}
          rating={restraunt.info.rating.rating_text}
          price={restraunt.info.cfo.text}
          dTime={restraunt.order.deliveryTime}

        />



      })}

    </div>


  </>
)
}