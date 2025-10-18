import React from 'react';
import {GiTrophyCup} from "react-icons/gi";
import "./poker.scss";
import {MdQuiz} from "react-icons/md";
import {HiUsers} from "react-icons/hi2";
import {RiUserFill} from "react-icons/ri";

const Poker = ({type}) => {
    return (
        <>
            {/* "Турниры" */}
            {type === "tournaments" && (
                <>
                    <div className="card">
                        <div className="title">Еженедельный турнир</div>
                        <div className="info">
                            <span className="green">Призовой фонд</span>
                            <span className="green"><GiTrophyCup/>5000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Взнос</span>
                            <span className="value">50 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Игроков</span>
                            <span className="value">45/100</span>
                        </div>
                        <div className="info">
                            <span className="label">Начало через</span>
                            <span className="value">2ч 30м</span>
                        </div>
                        <button className="button">Участвовать</button>
                    </div>

                    <div className="card">
                        <div className="title">Мега джекпот</div>
                        <div className="info">
                            <span className="green">Призовой фонд</span>
                            <span className="green"><GiTrophyCup/>20000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Взнос</span>
                            <span className="value">200 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Игроков</span>
                            <span className="value">78/200</span>
                        </div>
                        <div className="info">
                            <span className="label">Начало через</span>
                            <span className="value">1д 5ч</span>
                        </div>
                        <button className="button">Участвовать</button>
                    </div>
                </>
            )}

            {/*  "Комнаты" */}
            {type === "rooms" && (
                <>
                    <div className="card">
                        <div className="tips">
                            <div className="rooms-title">
                                <p>Типы покера</p>
                            </div>
                            <div className="rooms-btn">
                                <button>Holdem</button>
                            </div>
                            <div className="search-rates">
                                <div className="rates-info">
                                    <p>Фильтр по ставкам</p>
                                    <p><MdQuiz/>Как играть?</p>
                                </div>
                                <div className="rates-category">
                                    <button>Все</button>
                                    <button>Низкие</button>
                                    <button>Средние</button>
                                    <button>Высокие</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="popular-rooms">
                        <h2>Популярные комнаты</h2>

                        <div className="card">
                            <div className="content-rooms">
                                <div className="content-icon">
                                    <div className="icon poker"><RiUserFill/></div>
                                    <div>
                                        <p>Техасский Холдем</p>
                                        <p>10 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>Играть</button>
                                </div>
                            </div>
                            <div className="game-details">
                                <div className="players-info">
                                    <div className="players-count"><HiUsers/>3/6</div>
                                    <div className="online-count">24 онлайн</div>
                                </div>
                                <div className="players-progress propoker1">
                                    <div className="progress-fill filpoker1"></div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content-rooms">
                                <div className="content-icon">
                                    <div className="icon poker"><RiUserFill/></div>
                                    <div>
                                        <p>Омаха хай</p>
                                        <p>50 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>Играть</button>
                                </div>
                            </div>
                            <div className="game-details">
                                <div className="players-info">
                                    <div className="players-count"><HiUsers/>5/6</div>
                                    <div className="online-count">18 онлайн</div>
                                </div>
                                <div className="players-progress propoker">
                                    <div className="progress-fill filpoker"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Poker;
