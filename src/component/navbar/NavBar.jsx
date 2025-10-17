import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.scss"
import { IoMdHome } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { TbHistoryToggle } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
const NavBar = () => {
    return (
        <div>
            <nav className={"nav-bar"}>
                <ul>
                    <li><Link><IoMdHome className={"nav-icon"}/>Главная</Link></li>
                    <li><Link><TbHistoryToggle className={"nav-icon"}/>Кошелок</Link></li>
                    <li><Link><FaWallet className={"nav-icon"}/>История</Link></li>
                    <li><Link><HiUsers className={"nav-icon"}/>Рефералы</Link></li>
                    <li><Link><IoMdSettings className={"nav-icon"}/>Профиль</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;