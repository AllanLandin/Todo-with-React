import React, { useState } from "react";
import Modal from "./Modal";
    

function ListItem(props){
    const [done, setDone] = useState(false)

    function deleteItem(event){
        let id = event.target.id
        props.deleteTask(id)
    }

    function completeTask(){
        props.task.done = true
        setDone(true)
    }

    function undoneTask(){
        props.task.done = false
        setDone(false)
    }

    function formatDatePTBR(date){
        if (new Date(date).toLocaleDateString("pt-BR") == "Invalid Date")
            return "";
        else
            return new Date(date).toLocaleDateString("pt-BR");
    }

    return (
        <li key={props.task.id} className={props.task.done? "list-item done": "list-item"}>
            <span className="item-title">{props.task.title}</span>
            <div className="info-container">
                <span className="dueDateSpan">{formatDatePTBR(props.task.dueDate)}</span>
                <button className="icon-btn" onClick={props.task.done? undoneTask: completeTask}><img src={props.task.done? "checked.png": "todo.png"}></img></button>
                <button className="icon-btn"><img src="arrow.png"></img></button>
                <button className="icon-btn"><img src="trash.png" onClick={deleteItem} id={props.task.id}></img></button>
            </div>
        </li>
    )
}

export default ListItem;