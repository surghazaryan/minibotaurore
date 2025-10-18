import React, {useState} from 'react';
import "./wallet.scss"
import Replenish from "./Replenish.jsx";
import Withdraw from "./Withdraw.jsx";

const Wallet = () => {
    const [visible, setVisible] = useState(null)
    return (
        <>
            <div className="size_container">
                <div className="wallet-content">
                    <div className="wallet-title">
                        <h3>Кошелек</h3>
                        <hr/>
                    </div>
                    <div className="wallet-balance">
                        <p>Общий баланс</p>
                        <p>200000 USDT</p>
                    </div>
                    <div className="wallet-btn">
                        <button className={visible === "replenish" ? "active" : ""}
                                onClick={() => {
                                    setVisible("replenish")
                                }}>Пополнить
                        </button>
                        <button
                            className={visible === "withdraw" ? "active" : ""}
                            onClick={() => {
                                setVisible("withdraw")
                            }}>Вывести
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