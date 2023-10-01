import React from "react";



function Modal(props){
    function hideModal(event){
        if (event.target.className === "modal"){
            props.onHideModal(false)
        }
    }

    return (
        <div className={props.modal === true? "modal": "hide"} onClick={hideModal}>
            {props.children}
        </div>  
    )
}

export default Modal;