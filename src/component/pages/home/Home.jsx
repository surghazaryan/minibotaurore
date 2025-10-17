import React, {useState} from 'react';
import NavBar from "../../navbar/NavBar.jsx";
import "./home.scss"
import {Link, Outlet} from "react-router-dom";
import { GiTrophyCup } from "react-icons/gi";
import Blot from "../blot/Blot.jsx";
import Poker from "../poker/Poker.jsx";
const Home = () => {
    const [visible, setVisible] = useState(null); // պահում ենք որ կոմպոնենտ է ցուցադրվում

    const handleClick = (component) => {
        setVisible(prev => (prev === component ? null : component)); // toggle
    };
    return (
        <div className={"size_container"}>
           <div className="home-wrapper">
               <header>
                   <NavBar/>
               </header>
               <main>
                <div className="home-title">
                    <h3>Главная</h3>
                    <hr/>
                </div>
                   <section className={"balance-section"}>
                       <div className="balance-content">
                           <p>Ваш баланс</p>
                           <h4>1000 USDT</h4>
                           <Link>
                               <button>Пополнить</button>
                               <button>Вывести</button>
                           </Link>
                       </div>
                   </section>
                   <section className={"section-category"}>
                       <div className="container-category">
                           <div className="tabs">
                               <button onClick={()=>{handleClick("poker")}}>Покер</button>
                               <button onClick={()=>{handleClick("blot")}}>Блот</button>
                               <button>Комнаты</button>
                               <button >Турниры</button>
                           </div>

                           {visible === "blot" && <Blot/>}
                           {visible === "poker" && <Poker/>}
                       </div>


                   </section>
               </main>
           </div>
        </div>
    );
};

export default Home;