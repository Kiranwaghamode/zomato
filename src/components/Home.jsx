import React from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'
export const Home = () => {


    const navigate = useNavigate();

    const delivery = () =>{
        navigate('/delivery/0');
    }

    const dining = () =>{
        navigate('/dining/1');
    }

    const nightLife = () =>{
        navigate('/nightlife/2');
    }




    return (
        <>
            <div className="header">
                <div className="home-nav">
                    <ul>
                        <li>Log in </li>
                        <li>Sign up</li>
                    </ul>
                </div>


                <div className="main-heading">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="cover" />
                    <h2>Discover the best food & drinks in Bengaluru</h2>

                </div>

            </div>


            <div className="items">

            <div className="home-card" onClick={delivery}>
                <div className="img" ></div>
                <h4>Order Online</h4>
                <p>Stay home order on your door....</p>
            </div>

            <div className="home-card" onClick={dining}>
                <div className="img2" ></div>
                <h4>Dining</h4>
                <p>View the city's fav dining venture...</p>
            </div>

            <div className="home-card" onClick={nightLife}>
                <div className="img3" ></div>
                <h4>NightLife</h4>
                <p>Lorem ipsum dolor sit amet consecteture!</p>
            </div>


            </div>


            <footer> &copy; All the rights belongs to the zomato   </footer>




        </>
    )
}
