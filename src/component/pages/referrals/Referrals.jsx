import React, {useState} from "react";
import "./referrals.scss";
import { IoIosCopy } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
const Referrals = () => {
    const [copied, setCopied] = useState(false);
    const referralLink = "t.me/pokergame_bot?ref=ABC123XYZ";
    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
                   <h2>Рефералы</h2>

                   <div className="ref-card main">
                       <div>
                           <p>Заработано с рефералов</p>
                           <h1>342.80 USDT</h1>
                           <p>Приглашено друзей: 23</p>
                       </div>
                   </div>

                   <div className="ref-card link">
                       <h3>Ваша реферальная ссылка</h3>
                       <div className="ref-link-box">
                           <p>{referralLink}</p>
                           <button onClick={handleCopy}>
                               <IoIosCopy className={"copy-icon"}/>

                           </button>
                       </div>
                       {copied && <span className="copied-msg">Скопировано!</span>}
                   </div>

                   <div className="ref-card conditions">
                       <h3>Условия программы</h3>
                       <ul>
                           <li>5% с каждой игры вашего реферала</li>
                           <li>3% с игр рефералов второго уровня</li>
                           <li>Бонус 10 USDT за каждого активного друга</li>
                           <li>Мгновенное начисление на баланс</li>
                       </ul>
                   </div>


                   <button className="share-btn" ><HiUsers/>Поделиться ссылкой</button>

                   <div className="ref-card activity">
                       <h3>Активность рефералов</h3>
                       {referrals.map((r, i) => (
                           <div key={i} className="ref-row">
                               <div>
                                   <p>{r.name}</p>
                                   <span>{r.games} игр</span>
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
