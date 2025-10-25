import React, {useContext, useEffect, useState} from 'react';
import Poker from "../poker/Poker.jsx";
import Blot from "../blot/Blot.jsx";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";
import "./tournament.scss"
import BalanceHeader from "../../balanceHeader/BalanceHeader.jsx";

const Tournament = () => {
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
            setSelectedTab("tournaments");
        }
    };
    return (
        <>
           <div className="size_container">
               <section className={"section-tournament"}>
                   <div className={"tournament-title"}>
                     <div>
                         {/*<h3>{t.tournaments}</h3>*/}
                     </div>
                       <BalanceHeader/>
                   </div>
                   <div className="container-tournament">
                       <div className="tabs-tournament">
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
           </div>
        </>
    );
};

export default Tournament;