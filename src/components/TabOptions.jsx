import React, { useEffect } from 'react'
import '../css/tabOptions.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Explore } from './Explore';
import { restraunts } from '../data/restraunts'
import { diningData } from '../data/diningData';
import { nightLife } from '../data/nightLife';
import { useParams } from 'react-router-dom';
import { useMyContext } from '../context/Context';











export const TabOptions = () => {

  // const restrauntList = restraunts;

  const restName = 'Delivery Restaurants in Bangalore'

  const diningOut = diningData;

  const diningName = 'Best Dining Locations in Bangalore'

  const nightOut = nightLife;

  const nightName = 'Best Night Life in Bangalore'


  // const [activeIndex, setActiveIndex] = useState(0);


  const params = useParams();


  const { myState, setMyState, newDining, setnewDining, newNightlife, setnewNightlife } = useMyContext();





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

    if (index === 0) {
      tabNavigate('/delivery/0');
    }
    if (index === 1) {
      tabNavigate('/dining/1');
    }
    else if (index === 2) {
      tabNavigate('/nightlife/2');
    }

  };




  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };


  const [Filter, setFilter] = useState(false);
  const [Filter2, setFilter2] = useState(false)




  // const filterActive = () => {
  //   setFilter(!Filter);
  // };

  // const filter2Active = () => {
  //   setFilter2(!Filter2);
  // };



  const toggleFilter = () => {
    if (Filter && activeIndex===0) {
      setMyState([...restraunts]);
      setFilter(!Filter);
      return;
    } else if(!Filter && activeIndex===0){
      const sortedProducts = [...myState].sort((a, b) => Number(b.info.rating.rating_text) - Number(a.info.rating.rating_text));
      setMyState(sortedProducts);
      setFilter(!Filter);
      return;
    }

    else if(Filter && activeIndex ===1) {
      setnewDining([...diningOut]);
      setFilter(!Filter);
      return;
    }

    else if(!Filter && activeIndex === 1){
      const sortedProducts = [...newDining].sort((a, b) => Number(b.info.rating.rating_text) - Number(a.info.rating.rating_text));
      setnewDining(sortedProducts);
      setFilter(!Filter);
      return;
    }

    else if(Filter && activeIndex===2) {
      setnewNightlife([...nightOut]);
      setFilter(!Filter);
      return;
    }

    else if(!Filter && activeIndex === 2){
      const sortedProducts = [...newNightlife].sort((a, b) => Number(b.info.rating.rating_text) - Number(a.info.rating.rating_text));
      setnewNightlife(sortedProducts);
      setFilter(!Filter);
      return;
    }
    
    
  };

  const toggleFilter2 = () => {
    if (Filter2 && activeIndex===0) {
      setMyState([...restraunts]);
      setFilter2(!Filter2);
      return;
    } else if(!Filter2 && activeIndex===0){
      const sortedProducts = [...myState].sort((a, b) => parseInt(a.info.cfo.text.match(/[\d,]+/)[0].replace(/,/g, ''), 10) - parseInt(b.info.cfo.text.match(/[\d,]+/)[0].replace(/,/g, ''), 10));
      setMyState(sortedProducts);
      setFilter2(!Filter2);
      return;
    }
    

    else if (Filter2 && activeIndex===1){
      setnewDining([...diningOut]);
      setFilter2(!Filter2);
      return;
    } 
    else if(!Filter2 && activeIndex=== 1){
      const sortedProducts = [...newDining].sort((a, b) => parseInt(a.info.cfo.text.match(/[\d,]+/)[0].replace(/,/g, ''), 10) - parseInt(b.info.cfo.text.match(/[\d,]+/)[0].replace(/,/g, ''), 10));
      setnewDining(sortedProducts);
      setFilter2(!Filter2);
      return;
    }


    if (Filter2 && activeIndex===2) {
      setnewNightlife([...nightOut]);
      setFilter2(!Filter2);
      return;
    }
    else if(!Filter2 && activeIndex===2){
      const sortedProducts = [...newNightlife].sort((a, b) => parseInt(a.info.cfo.text.match(/[\d,]+/)[0].replace(/,/g, ''), 10) - parseInt(b.info.cfo.text.match(/[\d,]+/)[0].replace(/,/g, ''), 10));
      setnewNightlife(sortedProducts);
      setFilter2(!Filter2);
      return;
    }
  };






  const divClassName = ` ${Filter ? 'filter-active' : ''}`;
  const divClassName2 = ` ${Filter2 ? 'filter-active' : ''}`;







  return (

    <>

      <div className="nav">
        <div className="logo">
          <Link to='/'>
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
          </Link>
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
        <img src="https://static.vecteezy.com/system/resources/previews/009/008/831/original/of-filter-icon-filter-logo-isolated-on-white-background-free-vector.jpg" alt="" />
        
        <div className={divClassName} onClick={toggleFilter} >
          Sort by Rating Hight to low
        </div>

        <div className={divClassName2} onClick={toggleFilter2}>
          Sort by Price Low to High
        </div>



      </div>
      <div className='options'>

        <div
          className={`box ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => toggleActive(0)}
          id='delivery'
        >
          <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="" />
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
          <img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" alt="" />
          <h4> NightLife</h4>
        </div>
      </div>


      {activeIndex === 0 ? <Explore restName={restName} restrauntList={myState} /> : ''}
      {activeIndex === 1 ? <Explore restName={diningName} restrauntList={newDining} /> : ''}
      {activeIndex === 2 ? <Explore restName={nightName} restrauntList={newNightlife} /> : ''}

    </>
  );
};

