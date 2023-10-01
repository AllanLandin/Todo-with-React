import React from "react";

function Header(props){
    function showModal(){
        props.onShowModal()
    }

    return (
        <header className="header">
            <h1 className="title">To Do List!</h1>
            <div onClick={showModal} className="add-btn"></div>
        </header>
    )
}

export default Header;