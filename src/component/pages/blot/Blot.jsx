import React from 'react';
import {GiTrophyCup} from "react-icons/gi";
import {MdQuiz} from "react-icons/md";
import {IoFolderOpenSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import "./blot.scss";

const Blot = ({type}) => {
    return (
        <>
            {/*  "Турниры" */}
            {type === "tournaments" && (
                <>
                    <div className="card">
                        <div className="title">Чемпионат блота</div>
                        <div className="info">
                            <span className="green">Призовой фонд</span>
                            <span className="green"><GiTrophyCup/>3000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Взнос</span>
                            <span className="value">30 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Игроков</span>
                            <span className="value">32/64</span>
                        </div>
                        <div className="info">
                            <span className="label">Начало через</span>
                            <span className="value">5ч 15м</span>
                        </div>
                        <button className="button">Участвовать</button>
                    </div>

                    <div className="card">
                        <div className="title">Кубок месяца</div>
                        <div className="info">
                            <span className="green">Призовой фонд</span>
                            <span className="green"><GiTrophyCup/>10000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Взнос</span>
                            <span className="value">100 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">Игроков</span>
                            <span className="value">120/150</span>
                        </div>
                        <div className="info">
                            <span className="label">Начало через</span>
                            <span className="value">3д 12ч</span>
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
                                <p>Типы блота</p>
                            </div>
                            <div className="rooms-btn">
                                <button>2 из 2</button>
                                <button>Открытый Блот</button>
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
                                    <div className="icon"><IoFolderOpenSharp/></div>
                                    <div>
                                        <p>Блот 2 на 2</p>
                                        <p>30 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>Играть</button>
                                </div>
                            </div>
                            <div className="game-details">
                                <div className="players-info">
                                    <div className="players-count"><HiUsers/>3/4</div>
                                    <div className="online-count">22 онлайн</div>
                                </div>
                                <div className="players-progress">
                                    <div className="progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content-rooms">
                                <div className="content-icon">
                                    <div className="icon"><IoFolderOpenSharp/></div>
                                    <div>
                                        <p>Премиум Блот (2 на 2)</p>
                                        <p>200 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>Играть</button>
                                </div>
                            </div>
                            <div className="game-details">
                                <div className="players-info">
                                    <div className="players-count"><HiUsers/>4/4</div>
                                    <div className="online-count">6 онлайн</div>
                                </div>
                                <div className="players-progress otherprogress">
                                    <div className="progress-fill otherfill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Blot;
