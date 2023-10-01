import React from "react";
import ListItem from "./ListItem"

function List(props){
    return (
        <div>
            <ul className="list-container">
                {props.tasks.map((task, index) => <ListItem task={task} deleteTask={props.deleteTask}></ListItem>)}
            </ul>
        </div>
    )
}

export default List;