import React, { useEffect } from 'react'
import '../css/tabOptions.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Explore } from './Explore';
import { restraunts } from '../data/restraunts'
import { diningData } from '../data/diningData';
import { nightLife } from '../data/nightLife';
import { useParams } from 'react-router-dom';











export const TabOptions = () => {

  const restrauntList = restraunts;

  const restName = 'Delivery Restaurants in Bangalore'

  const diningOut = diningData;

  const diningName = 'Best Dining Locations in Bangalore'

  const nightOut = nightLife;

  const nightName = 'Best Night Life in Bangalore'


    // const [activeIndex, setActiveIndex] = useState(0);
    
    
    const params = useParams();

    


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const index = parseInt(params.state, 10);
      
      
      if (!isNaN(index) && index !== activeIndex) {
        setActiveIndex(index);
      }
    }, [params, activeIndex]);
  

    const tabNavigate = useNavigate();

    const toggleActive = (index) => {
      setActiveIndex(index);

      if(index===0){
        tabNavigate('/delivery/0');
      }
      if(index===1){
        tabNavigate('/dining/1');
      }
      else if(index===2){
        tabNavigate('/nightlife/2');
      }

    };




    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };


    const [filter, setfilter] = useState(false);

    const toggleFilter = ()=>{

      console.log(filter)

      setfilter(!filter);
      console.log(filter)
    }



  



    return (

      <>

          <div className="nav">
                <div className="logo">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
                </div>


                <div className={`${isMenuOpen ? 'menu show' : 'menu'}`}>
                    <ul>
                        <li>Log in </li>
                        <li>Sign up</li>

                    </ul>
                </div>

                <div className='hamburger-menu'
                    onClick={handleMenuToggle}
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>




      <div className="filter">
        <div className={`four-rating ${filter ? 'active': ''}`} onClick={toggleFilter}>Rating 4+</div>
        {/* <div className={`three-rating ${!filter ? 'active': ''}`} onClick={toggleFilter}>Rating 3+</div> */}



        
      </div>
      <div className='options'>
        
        <div
          className={`box ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => toggleActive(0)}
          id='delivery'
        >
            <img  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="" />
            <h4>Delivery</h4>
        </div>
        <div
          className={`box ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => toggleActive(1)}
          id='dining'
        >
            <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" alt="" />
            <h4>Dining Out</h4>
        </div>
        <div
          className={`box ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => toggleActive(2)}
          id='nightOut'
        >
            <img  src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" alt="" />
           <h4> NightLife</h4>
        </div>
      </div>


      {activeIndex === 0 ? <Explore restName={restName} restrauntList={restrauntList} />: '' }
      {activeIndex === 1 ? <Explore restName={diningName} restrauntList={diningOut} />: '' }
      {activeIndex === 2 ? <Explore restName={nightName} restrauntList={nightOut} />: '' }


      </>
    );
  };
