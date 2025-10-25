import React, {useContext, useEffect, useState} from 'react';
import NavBar from "../../navbar/NavBar.jsx";
import "./home.scss"
import {Link, Outlet} from "react-router-dom";
import {GiTrophyCup} from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import Blot from "../blot/Blot.jsx";
import Poker from "../poker/Poker.jsx";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";
import BalanceHeader from "../../balanceHeader/BalanceHeader.jsx";
import imgCard from "../../../assets/images/1.png"

const Home = () => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedTab, setSelectedTab] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const {t} = useContext(LanguageContext)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleGameSelect = (game) => {
        setSelectedGame(game);
        if (isMobile) {
            setSelectedTab(null);
        } else {
            setSelectedTab("rooms");
        }
    };

    return (
        <div className={"size_container"}>
            <div className="home-wrapper">
                <main>
                    <div className="home-title">
                       <div>
                           {/*<h3>{t.homeTitle}</h3>*/}
                           <hr />
                       </div>
                      <BalanceHeader/>
                    </div>
                    <section className={"balance-section"}>
                        <div className="balance-content">
                           <div>
                               <p>{t.yourBalance}</p>
                               <h4>{t.balanceAmount}</h4>
                           </div>
                            <div>
                                <img src={imgCard} alt=""/>
                            </div>
                            {/*<Link>*/}
                            {/*    <button>{t.deposit}</button>*/}
                            {/*    <button>{t.withdraw}</button>*/}
                            {/*</Link>*/}
                        </div>
                    </section>
                    <section className={"section-category"}>
                        <div className="container-category">
                            <div className="tabs">
                                <button
                                    className={selectedGame === "poker" ? "active" : ""}
                                    onClick={() => handleGameSelect("poker")}> {t.poker}
                                </button>
                                <button
                                    className={selectedGame === "blot" ? "active" : ""}
                                    onClick={() => handleGameSelect("blot")}>{t.blot}
                                </button>
                                {selectedGame && isMobile && (
                                    <>
                                        <button
                                            className={selectedTab === "rooms" ? "active" : ""}
                                            onClick={() => setSelectedTab("rooms")}
                                        >
                                            {t.rooms}
                                        </button>
                                        <button
                                            className={selectedTab === "tournaments" ? "active" : ""}
                                            onClick={() => setSelectedTab("tournaments")}
                                        >
                                            {t.tournaments}
                                        </button>
                                    </>
                                )}

                            </div>
                            {selectedGame === "poker" && selectedTab === "rooms" && (
                                <Poker type={"rooms"}/>
                            )}
                            {
                                selectedGame === "poker" && selectedTab === "tournaments" && (
                                    <Poker type={"tournaments"}/>
                                )
                            }
                            {
                                selectedGame === "blot" && selectedTab === "rooms" && (
                                    <Blot type={"rooms"}/>
                                )
                            }
                            {
                                selectedGame === "blot" && selectedTab === "tournaments" && (
                                    <Blot type={"tournaments"}/>
                                )
                            }
                            {
                                !selectedTab && selectedGame && (
                                    // <p>Выберите: Комнаты или Турниры</p>
                                    <p>{t.selectOption}</p>
                                )
                            }
                        </div>


                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;