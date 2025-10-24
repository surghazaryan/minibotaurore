import React, {useContext, useState} from "react";
import "./referrals.scss";
import { IoIosCopy } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";
import BalanceHeader from "../../balanceHeader/BalanceHeader.jsx";
const Referrals = () => {
    const [copied, setCopied] = useState(false);
    const {t} = useContext(LanguageContext);
    const referralLink = "t.me/pokergame_bot?ref=ABC123XYZ";
    
    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    const onShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Моя реферальная ссылка",
                    text: "Присоединяйся и получай бонусы!",
                    url: referralLink,
                });
            } catch (error) {
                console.error("Ошибка при отправке:", error);
            }
        } else {
          alert("Ошибка при отправке:")
        }

    }
    const referrals = [
        { name: "Александр", games: 12, amount: "+45.20 USDT" },
        { name: "Мария", games: 8, amount: "+32.50 USDT" },
        { name: "Дмитрий", games: 9, amount: "+28.90 USDT" },
    ];
    return (
       <>
           <div className="size_container">
               <div className="referrals-page">
                   <div className="referrals-title">
                       <h3>{t.referrals}</h3>
                       <BalanceHeader/>
                   </div>

                   <div className="ref-card main">
                       <div>
                           <p>{t.earnedFromReferrals}</p>
                           <h1>342.80 USDT</h1>
                           <p>{t.invitedFriends}: 23</p>
                       </div>
                   </div>

                   <div className="ref-card link">
                       <h3>{t.yourReferralLink}</h3>
                       <div className="ref-link-box">
                           <p>{referralLink}</p>
                           <button onClick={handleCopy}>
                               <IoIosCopy className={"copy-icon"}/>

                           </button>
                       </div>
                       {copied && <span className="copied-msg">{t.copied}!</span>}
                   </div>

                   <div className="ref-card conditions">
                       <h3>{t.programConditions}</h3>
                       <ul>
                           <li>{t.firstLevel}</li>
                           <li>{t.secondLevel}</li>
                           <li>{t.bonusFriend}</li>
                           <li>{t.instantCredit}</li>
                       </ul>
                   </div>


                   <button className="share-btn"  onClick={onShare}><HiUsers/>{t.shareLink}</button>

                   <div className="ref-card activity">
                       <h3>{t.referralsActivity}</h3>
                       {referrals.map((r, i) => (
                           <div key={i} className="ref-row">
                               <div>
                                   <p>{r.name}</p>
                                   <span>{r.games} {t.games}</span>
                               </div>
                               <h5>{r.amount}</h5>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
       </>
    );
};

export default Referrals;
