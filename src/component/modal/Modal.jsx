import React from 'react';
import "./modal.scss"
import { IoIosClose } from "react-icons/io";
const Modal = ({text,onClose}) => {
    return (
        <>
           <div className={"modal"}>
               <div className="modal-body" onClick={e => e.stopPropagation()}>
                   <button onClick={onClose}><IoIosClose className={"modal-close"}/></button>
                   <h3>{text}</h3>
               </div>
           </div>
        </>
    );
};

export default Modal;