import React, {useContext} from 'react';
import {FaRegUserCircle} from "react-icons/fa";
import "./balanceHeader.scss"
import {LanguageContext} from "../../context/LngProviderContext.jsx";
const BalanceHeader = () => {
    const {t} = useContext(LanguageContext);
    return (
        <>
            <div className={"home-small-balance"}>
                <div>
                    <p>{t.yourBalance}</p>
                    <h4>{t.balanceAmount}</h4>
                </div>
                <div>
                    <FaRegUserCircle className={"user-icon"}/>
                </div>
            </div>
        </>
    );
};

export default BalanceHeader;