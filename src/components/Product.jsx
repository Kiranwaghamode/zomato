import React, { useState } from 'react'
import '../css/product.css'
import '../css/tabOptions.css'

import { TabOptions } from "./TabOptions";
// import { RestCard } from './RestCard';




export const Product = () => {


    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };



    


   


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



            

            <TabOptions/>

            









        </>
    )
}
