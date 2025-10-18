import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.scss"
import { IoMdHome } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { TbHistoryToggle } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import {ROUTES} from "../routes/index.js";
const NavBar = () => {
    return (
        <div>
            <nav className={"nav-bar"}>
                <ul>
                    <li><Link to={ROUTES.HOME}><IoMdHome className={"nav-icon"}/>Главная</Link></li>
                    <li><Link to={ROUTES.WALLET}><FaWallet className={"nav-icon"}/>Кошелок</Link></li>
                    <li><Link to={ROUTES.HISTORY}><TbHistoryToggle className={"nav-icon"}/>История</Link></li>
                    <li><Link to={ROUTES.REFERRALS}><HiUsers className={"nav-icon"}/>Рефералы</Link></li>
                    <li><Link to={ROUTES.PROFILESETTINGS}><IoMdSettings className={"nav-icon"}/>Профиль</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;