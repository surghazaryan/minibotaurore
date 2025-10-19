import React from 'react';
import "./modal.scss"
const Modal = ({text}) => {
    return (
        <>
           <div className={"modal"}>
               <div className="modal-body">
                   <p>{text}</p>
               </div>
           </div>
        </>
    );
};

export default Modal;