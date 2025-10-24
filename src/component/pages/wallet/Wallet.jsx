import React, {useContext, useState} from 'react';
import "./wallet.scss"
import Replenish from "./Replenish.jsx";
import Withdraw from "./Withdraw.jsx";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";
import BalanceHeader from "../../balanceHeader/BalanceHeader.jsx";

const Wallet = () => {
    const [visible, setVisible] = useState(null)
    const {t} = useContext(LanguageContext);
    return (
        <>
            <div className="size_container">
                <div className="wallet-content">
                    <div className="wallet-title">
                        <h3>{t.wallet}</h3>
                       <BalanceHeader/>
                    </div>
                    <div className="wallet-balance">
                        <p>{t.yourBalance}</p>
                        <p>200000 USDT</p>
                    </div>
                    <div className="wallet-btn">
                        <button className={visible === "replenish" ? "active" : ""}
                                onClick={() => {
                                    setVisible("replenish")
                                }}>{t.deposit}
                        </button>
                        <button
                            className={visible === "withdraw" ? "active" : ""}
                            onClick={() => {
                                setVisible("withdraw")
                            }}>{t.withdraw}
                        </button>
                    </div>
                    {visible === "replenish" && <Replenish/>}
                    {visible === "withdraw" && <Withdraw/>}
                </div>
            </div>
        </>
    );
};

export default Wallet;