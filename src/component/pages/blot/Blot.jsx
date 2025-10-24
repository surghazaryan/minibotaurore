import React, {useContext, useState} from 'react';
import {GiTrophyCup} from "react-icons/gi";
import {MdQuiz} from "react-icons/md";
import {IoFolderOpenSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import "./blot.scss";
import Modal from "../../modal/Modal.jsx";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";

const Blot = ({type}) => {
    const {t} = useContext(LanguageContext);
    const [show, setShow] = useState(false)
    const onShowModal = () => {
        setShow(!show);
    }
    return (
        <>
            {/*  "Турниры" */}
            {type === "tournaments" && (
                <>
                    <div className="card">
                        <div className="title">{t.blotChampionship}</div>
                        <div className="info">
                            <span className="green">{t.prizeFund}</span>
                            <span className="green"><GiTrophyCup/>3000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.fee}</span>
                            <span className="value">30 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.players}</span>
                            <span className="value">32/64</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.startsIn}</span>
                            <span className="value">5ч 15м</span>
                        </div>
                        <button className="button">{t.participate}</button>
                    </div>

                    <div className="card">
                        <div className="title">{t.cupOfMonth}</div>
                        <div className="info">
                            <span className="green">{t.prizeFund}</span>
                            <span className="green"><GiTrophyCup/>10000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.fee}</span>
                            <span className="value">100 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.players}</span>
                            <span className="value">120/150</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.startsIn}</span>
                            <span className="value">3д 12ч</span>
                        </div>
                        <button className="button">{t.participate}</button>
                    </div>
                </>
            )}

            {/*  "Комнаты" */}
            {type === "rooms" && (
                <>
                    <div className="card">
                        <div className="tips">
                            <div className="rooms-title">
                                <p>{t.blotTypes}</p>
                            </div>
                            <div className="rooms-btn">
                                <button>{t.twoOfTwo}</button>
                                <button>{t.openBlot}</button>
                            </div>
                            <div className="search-rates">
                                <div className="rates-info">
                                    <p>Фильтр по ставкам</p>
                                    <div onClick={onShowModal}>
                                        <p><MdQuiz/>{t.howToPlay}</p>
                                        {
                                            show ? <Modal text={'blot'}/> : null
                                        }
                                    </div>
                                </div>
                                <div className="rates-category">
                                    <button>{t.all}</button>
                                    <button>{t.low}</button>
                                    <button>{t.medium}</button>
                                    <button>{t.high}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="popular-rooms">
                        <h2>{t.popularRooms}</h2>

                        <div className="popular-rooms-card">
                            <div className="content-rooms">
                                <div className="content-icon">
                                    <div className="icon"><IoFolderOpenSharp/></div>
                                    <div>
                                        <p>Блот 2 на 2</p>
                                        <p>30 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>{t.play}</button>
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

                        <div className="popular-rooms-card">
                            <div className="content-rooms">
                                <div className="content-icon">
                                    <div className="icon"><IoFolderOpenSharp/></div>
                                    <div>
                                        <p>Премиум Блот (2 на 2)</p>
                                        <p>200 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>{t.play}</button>
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
