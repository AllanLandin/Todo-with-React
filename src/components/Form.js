import React, {useState} from "react";
import task from "../scripts/task";

function Form(props){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState("");

    function changeText(event){
        setText(event.target.value)
    }

    function changeTitle(event){
        setTitle(event.target.value)
    }
    
    function changeDueDate(event){
        setDueDate(event.target.value)
    }

    function addTask(event){
        event.preventDefault()
        if (text){  
            let newTask = new task(title, text, dueDate)
            props.onAddTask(newTask)
            setText("")
            setDueDate("");
            setTitle("");
        }
    }

    return (
        <form className="form-container">
            <input className="input" placeholder="Título" onChange={changeTitle} value={title}></input>
            <input className="input" placeholder="Digite a tarefa" onChange={changeText} value={text}></input>
            <input className="input" type="date" onChange={changeDueDate} value={dueDate} required></input>
            <button className="btn" onClick={addTask}>Adicionar</button>
        </form>
    )
}

export default Form;