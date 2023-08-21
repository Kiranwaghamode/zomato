import React from 'react'
import { RestCard } from './RestCard'
import '../css/explore.css'


export const Explore = ({ restName, restrauntList }) => {

  // const resName = restrauntList.info.name;
  // const imgUrl = restrauntList?.info?.image?.url;
  // const cuisine = restrauntList?.info?.cuisine.map((item) => item.name).slice(0,3);

  // console.log(resName);


  return (
    <>
      <div className="heading">{restName} </div>
      <div className="cards">

      {restrauntList.map((restraunt)=>{

        return <RestCard 
        key={restraunt?.info?.image?.url}

        resName = {restraunt.info.name}
        imgUrl={restraunt?.info?.image?.url}
        cuisine={ restraunt?.info?.cuisine.map((item) => item.name).slice(0,3)}
        rating={restraunt.info.rating.rating_text}
        price={restraunt.info.cfo.text}
        dTime={restraunt.order.deliveryTime}
  
        />
        
        
        
      })}

      </div>


    </>
  )
}