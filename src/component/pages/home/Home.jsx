import React, {useState} from 'react';
import NavBar from "../../navbar/NavBar.jsx";
import "./home.scss"
import {Link, Outlet} from "react-router-dom";
import {GiTrophyCup} from "react-icons/gi";
import Blot from "../blot/Blot.jsx";
import Poker from "../poker/Poker.jsx";

const Home = () => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedTab, setSelectedTab] = useState(null);
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
                                <button
                                    className={selectedGame === "poker" ? "active" : ""}
                                    onClick={() => {
                                        setSelectedGame("poker");
                                        setSelectedTab(null)
                                    }}>Покер
                                </button>
                                <button
                                    className={selectedGame === "blot" ? "active" : ""}
                                    onClick={() => {
                                        setSelectedGame("blot");
                                        setSelectedTab(null)
                                    }}>Блот
                                </button>
                                {
                                    selectedGame &&
                                    <>
                                        <button
                                            className={selectedTab === "rooms" ? "active" : ""}
                                            onClick={() => {
                                                setSelectedTab("rooms")
                                            }}>Комнаты
                                        </button>
                                        <button
                                            className={selectedTab === "tournaments" ? "active" : ""}
                                            onClick={() => {
                                                setSelectedTab("tournaments")
                                            }}>Турниры
                                        </button>
                                    </>
                                }

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
                                    <p>Выберите: Комнаты или Турниры</p>
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