import React, {useContext} from 'react';
import "./poker.scss"
import {LanguageContext} from "../../../context/LngProviderContext.jsx";
const PokerDescription = () => {
    const{t} = useContext(LanguageContext);
    return (
        <>
            <div className="pokerDescription">
                <div className="description-title">
                    <h2>{t.texasRules}</h2>
                </div>
                <div className="the-goal-of-the-game">
                    <h4>{t.goalOfGame}</h4>
                    <p>{t.goalText}</p>
                </div>
                <div className="trading-rounds">
                    <h4>{t.tradingRounds}</h4>
                    <p>{t.tradingText}</p>
                </div>
                <div className="combination">
                    <h4>{t.combinations}</h4>
                    <p>{t.combinationsText}</p>
                </div>
            </div>
        </>
    );
};

export default PokerDescription;