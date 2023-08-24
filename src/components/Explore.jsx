import React, { useEffect } from 'react'
import { RestCard } from './RestCard'
import '../css/explore.css'
import { useMyContext } from '../context/Context';







export const Explore = ({ restName, restrauntList }) => {

  // const [real_restrauntList, setreal_restrauntList] = useState(restrauntList)

  
  const {  setresData } = useMyContext();

  

useEffect(() => {
  setresData([...restrauntList])

 // eslint-disable-next-line
}, [])












  return (
    <>
      <div className="heading">{restName} </div>
      <div className="cards">

        {restrauntList.map((restraunt , index) => {


          return <><RestCard
            // key={restraunt?.info?.image?.url}
            key={index}
            resName={restraunt.info.name}
            imgUrl={restraunt?.info?.image?.url}
            cuisine={restraunt?.info?.cuisine.map((item) => item.name).slice(0, 3)}
            rating={restraunt.info.rating.rating_text}
            price={restraunt.info.cfo.text}
            dTime={restraunt.order.deliveryTime}
            resId={restraunt.info.resId}
          />
          </>
          



        })}

      </div>


    </>
  )
}
