import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./navbar.scss"
import { IoMdHome } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { TbHistoryToggle } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { TiUserOutline } from "react-icons/ti";
import { GiTrophyCup } from "react-icons/gi";
import {ROUTES} from "../routes/index.js";
import {LanguageContext} from "../../context/LngProviderContext.jsx";
const NavBar = () => {
    const {t} = useContext(LanguageContext);
    return (
        <div>
            <nav className={"nav-bar"}>
                <div className="logo">
                    <TiUserOutline className={"logo-icon"}/>
                    <h3>Poker&Blot</h3>
                </div>
                <ul>
                    <li><Link to={ROUTES.HOME}><IoMdHome className={"nav-icon"}/>{t.home}</Link></li>
                    <li><Link to={ROUTES.TOURNAMENTS}><GiTrophyCup className={"nav-icon"}/>{t.tournaments}</Link></li>
                    <li><Link to={ROUTES.WALLET}><FaWallet className={"nav-icon"}/>{t.wallet}</Link></li>
                    <li><Link to={ROUTES.HISTORY}><TbHistoryToggle className={"nav-icon"}/>{t.history}</Link></li>
                    <li><Link to={ROUTES.REFERRALS}><HiUsers className={"nav-icon"}/>{t.referrals}</Link></li>
                    <li><Link to={ROUTES.PROFILESETTINGS}><IoMdSettings className={"nav-icon"}/>{t.settings}</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;