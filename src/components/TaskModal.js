import React from "react";

function TaskModal(props){

    function hideTaskModal(event){
        let targetClass = event.target.className;
        if (targetClass == "modal") props.hideTask();
        return;
    }

    return (
        <div className={props.showTask? "modal": "hide"} onClick={hideTaskModal}>
            <div className="taskModal-wrap">
                <div className="title-wrap">
                    <h2>{props.task.title}</h2>
                    <span>{props.task.dueDate}</span>
                </div>
                <p>{props.task.desc}</p>
            </div>
        </div>
    )
}

export default TaskModal;