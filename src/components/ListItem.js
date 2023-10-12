import React, { useState } from "react";
import TaskModal from "../components/TaskModal"
    
function ListItem(props){
    const [ , setDone] = useState(false)
    const [showTask, setShowTask] = useState(false);

    function deleteItem(event){
        let id = event.target.id
        console.log(id);
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

    function showTaskModal(){
        setShowTask(true);
    }
    function hideTask(){
        setShowTask(false);
    }

    function formatDatePTBR(date){
        if (new Date(date).toLocaleDateString("pt-BR") === "Invalid Date")
            return "";
        else
            return new Date(date).toLocaleDateString("pt-BR");
    }


    return (
        <li key={props.task.id} className={props.task.done? "list-item done": "list-item"}>
            <span className="item-title">{props.task.title}</span>
            <div className="info-container">
                <span className="dueDateSpan">{formatDatePTBR(props.task.dueDate)}</span>
                <button className="icon-btn" onClick={props.task.done? undoneTask: completeTask}><img alt="Todo" src={props.task.done? require('../images/checked.png'): require('../images/todo.png')}></img></button>
                <button className="icon-btn"><img src={require('../images/arrow.png')} onClick={showTaskModal}></img></button>
                <button className="icon-btn"><img src={require('../images/trash.png')} onClick={deleteItem} id={props.task.id}></img></button>
            </div>
            <TaskModal hideTask={hideTask} showTask={showTask} task={props.task}></TaskModal>
        </li>
    )
}

export default ListItem;