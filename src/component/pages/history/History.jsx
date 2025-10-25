import React, {useContext} from 'react';
import "./history.scss"
import {LanguageContext} from "../../../context/LngProviderContext.jsx";
import BalanceHeader from "../../balanceHeader/BalanceHeader.jsx";
const History = () => {
const {t} = useContext(LanguageContext);
    return (
        <>
            <div className="size_container">
                <div className="content-history">
                    <div className="history-title">
                        {/*<h3>{t.historyTitle}</h3>*/}
                        <BalanceHeader/>
                    </div>
                    <div className="history-card">
                        <div className="card-history-sum">
                           <div >
                               <p>{t.pokerProfi}</p>
                               <p>{t.time}</p>
                           </div>
                            <h5>+250 USDT</h5>
                        </div>
                        <div className="card-history-sum">
                           <div>
                               <p>{t.blotClassic}</p>
                               <p>{t.time}</p>
                           </div>
                            <h5>-20 USDT</h5>
                        </div>
                        <div className="card-history-sum">
                           <div>
                               <p>{t.tournamentWeekly}</p>
                               <p>{t.time}</p>
                           </div>
                            <h5>+1200 USDT</h5>
                        </div>
                        <div className="card-history-sum">
                           <div>
                               <p>{t.pokerMedium}</p>
                               <p>{t.time}</p>
                           </div>
                            <h5>-50 USDT</h5>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default History;