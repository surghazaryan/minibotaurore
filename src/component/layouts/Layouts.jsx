import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../navbar/NavBar.jsx";
import "./layouts.scss"


const Layouts = () => {
    return (
        <div >
           <div className={"column"}>
              <header>
                  <NavBar/>
              </header>
               <Outlet/>
           </div>
        </div>
    );
};

export default Layouts;