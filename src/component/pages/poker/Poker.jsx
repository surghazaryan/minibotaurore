import React, {useContext, useState} from 'react';
import {GiTrophyCup} from "react-icons/gi";
import "./poker.scss";
import {MdQuiz} from "react-icons/md";
import {HiUsers} from "react-icons/hi2";
import {RiUserFill} from "react-icons/ri";
import Modal from "../../modal/Modal.jsx";
import PokerDescription from "./PokerDescription.jsx";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";

const Poker = ({type}) => {
    const {t} = useContext(LanguageContext);
    const [show, setShow] = useState(false)
    const onShowModal = () => {
        setShow(!show);
    }

    return (
        <>
            {/* "Турниры" */}
            {type === "tournaments" && (
                <>
                    <div className="card">
                        <div className="title">{t.weeklyTournament}</div>
                        <div className="info">
                            <span className="green">{t.prizeFund}</span>
                            <span className="green"><GiTrophyCup/>5000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.fee}</span>
                            <span className="value">50 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.players}</span>
                            <span className="value">45/100</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.startsIn}</span>
                            <span className="value">2ч 30м</span>
                        </div>
                        <button className="button">{t.participate}</button>
                    </div>

                    <div className="card">
                        <div className="title">{t.megaJackpot}</div>
                        <div className="info">
                            <span className="green">{t.prizeFund}</span>
                            <span className="green"><GiTrophyCup/>20000 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.fee}</span>
                            <span className="value">200 USDT</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.players}</span>
                            <span className="value">78/200</span>
                        </div>
                        <div className="info">
                            <span className="label">{t.startsIn}</span>
                            <span className="value">1д 5ч</span>
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
                                <p>{t.pokerTypes}</p>
                            </div>
                            <div className="rooms-btn">
                                <button>Holdem</button>
                            </div>
                            <div className="search-rates">
                                <div className="rates-info">
                                    <p>{t.rateFilter}</p>
                                    <div onClick={onShowModal}>
                                        <p><MdQuiz/>{t.howToPlay}</p>
                                        {show && <Modal text={<PokerDescription />} onClose={() => setShow(false)} />}
                                    </div>
                                </div>
                                <div className="rates-category">
                                    <button>{t.low}</button>
                                    <button>{t.medium}</button>
                                    <button>{t.high}</button>
                                    <button>{t.all}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="popular-rooms">
                        <h2>{t.popularRooms}</h2>

                        <div className="popular-rooms-card">
                            <div className="content-rooms">
                                <div className="content-icon">
                                    <div className="icon poker"><RiUserFill/></div>
                                    <div>
                                        <p>Техасский Холдем</p>
                                        <p>10 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>{t.play}</button>
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

                        <div className="popular-rooms-card">
                            <div className="content-rooms">
                                <div className="content-icon">
                                    <div className="icon poker"><RiUserFill/></div>
                                    <div>
                                        <p>Омаха хай</p>
                                        <p>50 USDT</p>
                                    </div>
                                </div>
                                <div className="play">
                                    <button>{t.play}</button>
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
